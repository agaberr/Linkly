const User = require('../models/User');

const searchController = {

    searchByUser: async (req, res) => {

        const signedUserId = req.user._id;

        try {
            const keyword = req.body.keyword;
            if (!keyword) {
                const usersResults = await User.find({ _id: {$ne: signedUserId}}).select('-password').lean();
                return res.status(200).json(usersResults);
            }
              const regex = new RegExp('^' + keyword, 'i');
              const usersResults = await User.find({ username: regex, _id: { $ne: signedUserId } });

            return res.status(200).json(usersResults);

        } catch (error) {
            console.error("Error searching by users:", error);
            return res.status(500).json({ error: "Internal server error" });
        }



    }


};

module.exports = searchController;
