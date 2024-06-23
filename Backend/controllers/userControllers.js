const User = require('../models/User');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const userController = {

    getAllUsers: async (req, res) => {
        try {
        const users = await User.find().select('-password').lean();

        if (!users?.length) {
            return res.status(400).json({ message: 'No users found' });
        }
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }

    },
    getUser: async (req, res) => {
        try {
        const userId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await User.findById(userId).select('-password').lean();

        if (!user) {
            return res.status(400).json({ message: 'No user found' });
        }
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
    },
    createUser: async (req, res) => {
        try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        const duplicate = await User.findOne({ username }).lean().exec();

        if (duplicate) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // salt rounds

        // Add a picture https://avatar.iran.liara.run/username?username=Scott+Wilson

        const profile_pic = `https://avatar.iran.liara.run/username?username=${username}`

        const userObject = {username, email, "password": hashedPassword, "profile_picture": profile_pic};

        const user = await User.create(userObject);

        if (user) {
            res.status(201).json({message: 'User created successfully'});
        } else {
            res.status(400).json({message: 'Failed to create user'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
    },
    updateUser: async (req, res) => {
        try {
        const { id, username, email, password } = req.body;
        
        if (!id || !username || !email) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        const user = await User.findById(id).exec();

        if (!user) {
            return res.status(400).json({ message: 'No user found' });
        }

        const duplicate = await User.findOne({ username }).lean().exec();

        if (duplicate && duplicate._id !== id) {
            return res.status(409).json({ message: 'User already exists' });
        }

        user.username = username;
        user.email = email;

        if (password) {
            user.password = await bcrypt.hash(password, 10); // salt rounds
        }

        const updatedUser = await user.save();

        res.json({ message: `${updatedUser.username} updated successfully` })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
    },
    deleteUser: async (req, res) => {
     try {
        const { id } =  req.body;

        if(!id) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        
        const user = await User.findById(id).exec();

        if (!user) {
            return res.status(400).json({ message: 'No user found' });
        }

        await User.deleteOne();

        const reply = `User deleted successfully`;

        res.json(reply);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
    },
    getConversationUsers: async (req, res) => {

        const signedUserId = req.user._id;
        // console.log(signedUserId);

        try {
            const users = await User.find({ _id: {$ne: signedUserId}}).select('-password').lean();
    
            if (!users?.length) {
                return res.status(400).json({ message: 'No users found' });
            }
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Server error' });
        }

    }
}

module.exports = userController;