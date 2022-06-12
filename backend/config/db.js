import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/myContactApp", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDb;