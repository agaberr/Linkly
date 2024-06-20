const jwt = require('jsonwebtoken')
const User = require('../models/User')
const dotenv = require('dotenv');

dotenv.config();

const authUser = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;

        if (!token)
            return res.status(401).json({ error: "Unauthorized" });

        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

        if (!decoded)
            return res.status(401).json({ error: "Unauthorized" });

        const user = await User.findById({ _id: decoded.id }).exec();

        if (!user)
            return res.status(404).json({ error: "User not found" });

        req.user = user;

        next();

    } catch (error) {
        console.log('Error in authUserMiddleware ', error.message);
        res.status(500).json({ message: "internal server error" });
    }

}

module.exports = authUser;