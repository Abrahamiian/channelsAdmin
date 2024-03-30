import mongoose from "mongoose";

const url = "mongodb+srv://abrahamyanabraham05:IMbnfRcfnF90sZb6@cluster0.xuusgo5.mongodb.net/"
const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(url, {
            auth: {
                username: process.env.MONGO_USER,
                password: process.env.MONGO_PASS
            }
        })
        console.log("Connected!!!")
    } catch (error) {
        console.log(error);
        console.log("Error!!!!!");
    }
};

export default dbConnect
