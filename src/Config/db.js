import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb+srv://newsapp:newsapp@cluster0.xsicxsz.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((conn) => {
            console.log(`Server Connected ${conn.connection.host}`.cyan.bold)
        })
        .catch((error) => {
            console.log(`Server Not Connected ${conn.connection.host}`.red.underline.bold)
        })
}

export default connectDB
