import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

const auth = (req, res, next) => {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(403).json({ err: 'Invalid token' });
    }
    try {
        jwt.verify(token.slice(7), process.env.jwtSecret, (error, user) => {
            // console.log(err)
            if (error) return res.sendStatus(403)
            req.user = user;
            next();
        });

    } catch (error) {
        console.error(error.message);
        return res.status(401).json({ error: error.message });
    }
}
export { auth }
