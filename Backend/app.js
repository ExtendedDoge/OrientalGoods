import { connectDatabase } from "./database.js"
import bodyParser from "body-parser"
import express from "express"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid'
import { generateJwt } from "./jwt/webtoken.js"
import { auth } from "./middleware/middle.js"
import cors from "cors"
import corsOptions from "../Backend/config/corsoptions.js"

const app = express()
const pool = connectDatabase()
const PORT = 8000

app.use(express.json())
app.use(cors());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({
        status: "success",
    });
});


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

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);
        const newUser = await pool.query(`INSERT INTO public.accountcreate (id, lastname, firstname, email, username, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [uuidv4(), lastname, firstname, email, username, bcryptPassword])

        const token = generateJwt(newUser.rows[0])

        res.json({
            token
        })
    } catch (error) {

        console.log(error.message)
        res.status(500).send(error.message)
    }

})

app.post('/login', async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        const user = await pool.query(`SELECT * FROM public.accountcreate WHERE username = $1`, [username])

        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are Required' })
        }
        if (user.rows.length < 0) {
            res.status(401).send("Username does not exists")
        }
        const validPassword = await bcrypt.compare(password, user.rows[0].password)
        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect. Please try again.")
        }
        const token = generateJwt(user.rows[0])
        res.json({
            token
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        });
    }
})

app.get('/verify', auth, async (req, res) => {
    try {
        res.json(req.user)
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unauthenticated"
        });
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