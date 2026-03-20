import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

// Fix for 'querySrv ECONNREFUSED' on Windows/ISP DNS blocking
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("Database connected successfully");
    } catch (error: any) {
        console.log("Database connection failed");
        console.log(error.message);
    }
};

export default connectDB;