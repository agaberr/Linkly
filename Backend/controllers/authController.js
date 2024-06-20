const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authController = {

    signin: async (req, res) => {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const foundUser = await User.findOne({ username }).exec();

        if (!foundUser) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const match = await bcrypt.compare(password, foundUser.password)

        if (!match){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const accessToken = jwt.sign(
            {
                
                "username": foundUser.username,
                "email": foundUser.email,
                "password": foundUser.password,
                "profile_picture": foundUser.profile_picture,
                "online_status": foundUser.online_status,
                "created_at": foundUser.created_at
                
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15min' }
        )

        const refreshToken = jwt.sign(
            {
                    "id": foundUser._id,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.json({ accessToken });
    },
    refresh: async (req, res) => {
        const cookies = req.cookies;

        if (!cookies?.jwt){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const refreshToken = cookies.jwt;

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                const foundUser = await User.findOne({ username: decoded.username })

                if (!foundUser) return res.status(401).json({ message: 'Unauthorized' });

                const accessToken = jwt.sign(
                    {
                        "username": foundUser.username,
                        "email": foundUser.email,
                        "password": foundUser.password,
                        "profile_picture": foundUser.profile_picture,
                        "online_status": foundUser.online_status,
                        "created_at": foundUser.created_at
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15min' }
                );

                res.json({ accessToken });

            }
        )


    },
    signout: async (req, res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(204);
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        res.json({ message: 'Cookie cleared' });
    }

}

module.exports = authController;