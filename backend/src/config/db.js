import mongoose from "mongoose";

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Liên kết cơ sở dữ liệu MongoDB thành công");
    } catch (error) {
        console.error("Lỗi khi kết nối đến MongoDB:", error);
       process.exit(1); //exit with error
    }
};
