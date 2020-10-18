const { User } = require('../model/User')
module.exports = {
    user: async () => {
        const userData = await User.find({});
        console.log(userData);
        return userData.map(el => {
            const item = el;
            item._id = item.id.toString();
            return item
        })
    },
    createUser: async ({ userInput }) => {
        const newUser = new User({
            name: userInput.name,
            email: userInput.email,
            password: userInput.password,
            mobileNumber: userInput.mobileNumber
        });

        const savedData = await newUser.save();

        return {...savedData._doc, _id: savedData._doc._id.toString()}
    }

}