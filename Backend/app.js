import { connectDatabase } from "./database.js"
import bodyParser from "body-parser"
import express, { response } from "express"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid'
import { generateJwt } from "./jwt/webtoken.js"
import { auth } from "./middleware/auth.js"
import cors from "cors"
// import corsOptions from "../Backend/config/corsoptions.js"
import { upload } from "../Backend/middleware/imageupload.js"

const app = express()
const pool = connectDatabase()
const PORT = 8000

app.use(express.json())
app.use(cors());
// app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/image", express.static("public/uploads"))


app.get("/", (req, res) => {
    res.json({
        status: "success",
    });
});

//ok now working
app.post('/register', async (req, res) => {
    try {
        const {
            lastname,
            firstname,
            email,
            username,
            password
        } = req.body
        const newemail = await pool.query(`SELECT * FROM public.accountcreate WHERE email = $1`, [email])
        const newuser = await pool.query(`SELECT * FROM public.accountcreate WHERE username = $1`, [username])

        if (newemail.rows.length > 0 || newuser.rows.length) {
            res.status(401).send("Username or email already exists!. Please try again.")
        }
        //bcrypt setup 
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        //new user to database
        const newUser = await pool.query(`INSERT INTO public.accountcreate (id, lastname, firstname, email, username, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [uuidv4(), lastname, firstname, email, username, bcryptPassword])

        //generate token
        const token = generateJwt(newUser.rows[0])

        res.json({ token })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

//ok now working
app.post('/login', async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        const user = await pool.query(`SELECT * FROM public.accountcreate WHERE username = $1`, [username])

        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is Incorrect. Please try again.")
        }
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are Required' })
        }
        if (user.rows.length < 0) {
            res.status(401).send("Username does not exists")
        }

        //pasword verification if correct or empty
        const validPassword = await bcrypt.compare(password, user.rows[0].password)
        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect. Please try again.")
        }

        //generation of token
        const token = generateJwt(user.rows[0])
        res.json({ token })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated",
        });
    }
})

//done
app.get('/myprofile', auth, async (req, res) => {
    try {
        const id = req.user.id
        console.log(id)
        const user = await pool.query(
            "SELECT * FROM public.accountcreate WHERE id = $1", [id]
        );
        console.log(user.rows[0])
        res.json(`User Details:
        Username: ${user.rows[0].username} 
        Firstname: ${user.rows[0].firstname} 
        Lastname: ${user.rows[0].lastname} 
        Email: ${user.rows[0].email}`)
    } catch (error) {
        console.error(error.message)
        response.status(500).send({
            msg: "Unauthenticated",
        });
    }
});

//ok now working verfici
app.get('/verify', auth, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        });
    }
})


//add image on database to be reused for displaying pages
//first is for adding items for clothing category
app.post(
    `/user/itemsforsale`,
    auth,
    upload.array("file", 2),
    async (request, response) => {
        try {
            const {
                image3 = request.files[0].filename,
            } = request.files;

            const { productname, manufacturer, description, price, color, size } = request.body;

            const userId = request.user.id;


            // console.log(request.body);
            // console.log(request.files);

            const addItemsForSale = await pool.query(
                `INSERT INTO public.dbitems (productname, manufacturer, description, price, image3, color, size, id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
                [productname, manufacturer, description, price, image3, color, size, userId]
            );
            response.json(addItemsForSale.rows[0]);
        } catch (error) {
            console.log(error)
        }
    });


//view user added clothing listing
app.get('/user/added-items', auth, async (request, response) => {
    try {
        const addedItemsToDB = await pool.query(
            "SELECT public.accountcreate.username, public.accountcreate.email, public.dbitems.product_id, public.dbitems.productname, public.dbitems.manufacturer, public.dbitems.description, public.dbitems.price, public.dbitems.color, public.dbitems.size, public.dbitems.image3 FROM public.accountcreate LEFT JOIN public.dbitems ON public.accountcreate.id = public.dbitems.id WHERE public.accountcreate.id = $1 ORDER BY public.dbitems.product_id DESC",
            [request.accountcreate.id]
        );

        response.json(addedItemsToDB.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get all clothing items added. to be used for categories section on react frontend(should be 3 pcs)
app.get("/all-items", async (request, response) => {
    try {
        const allItemList = await pool.query(
            "SELECT product_id, productname, manufacturer, description, price, color, size, image3 FROM public.dbitems ORDER BY public.dbitems.product_id DESC"
        );
        response.json(allItemList.rows);
    } catch (error) {
        console.log(error)
    }
})

//single items
app.get("/all-items/:id", async (request, response) => {
    try {
        const individualItemsID = request.params.id;
        const individualItems = await pool.query(
            "SELECT public.accountcreate.firstname, public.accountcreate.lastname, public.accountcreate.username, public.accountcreate.email, public.dbitems.product_id, public.dbitems.productname, public.dbitems.manufacturer, public.dbitems.description, public.dbitems.price, public.dbitems.color, public.dbitems.size, public.dbitems.image3, FROM public.accountcreate LEFT JOIN public.dbitems ON public.accountcreate.id = public.dbitems.id WHERE public.dbitems.product_id = $1",
            [individualItemsID]
        );
        response.json(individualItems.rows)
    } catch (error) {
        console.log(error)
    }
})


pool.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(PORT, () => {
            console.log(`Server has started on http://localhost:${PORT}`)
        })
    }
})