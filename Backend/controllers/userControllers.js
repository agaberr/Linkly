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
        const { username, bio, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        const duplicate = await User.findOne({ username }).lean().exec();

        if (duplicate) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // salt rounds

        // Add a picture https://avatar.iran.liara.run/username?username=Scott+Wilson

        // const profile_pic = `https://avatar.iran.liara.run/username?username=${username}`
        const profile_pic = `https://eu.ui-avatars.com/api/?name=${username}&background=random&bold=true`

        const userObject = {username, bio, email, "password": hashedPassword, "profile_picture": profile_pic};

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

        const signedUserId = req.user._id;
        const { username, bio, email, password } = req.body;
        
        if (!username || !email || !bio) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        const user = await User.findById(signedUserId);

        if (!user) {
            return res.status(400).json({ message: 'No user found' });
        }

        const duplicate = await User.findOne({ username }).lean().exec();

        if (duplicate && !duplicate._id.equals(signedUserId)) {
            return res.status(409).json({ message: 'User already exists' });
        }

        user.username = username;
        user.email = email;
        user.bio = bio;
        //FIXME: doesn't work here
        user.profile_pic = `https://eu.ui-avatars.com/api/?name=${username}&background=random&bold=true`

        if (password) {
            user.password = await bcrypt.hash(password, 10); // salt rounds
        }

        await user.save();

        const userdata = await User.findById(signedUserId).select('-password').lean();

        res.json({ userdata })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
    },
    deleteUser: async (req, res) => {
     try {
        const signedUserId = req.user._id;

        if(!signedUserId) {
            return res.status(400).json({ message: 'You are not signed in to delete account' });
        }
        
        const user = await User.findById(signedUserId).exec();

        if (!user) {
            return res.status(400).json({ message: 'No user found' });
        }

        await User.deleteOne({ _id: signedUserId });

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