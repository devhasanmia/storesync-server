import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function startServer() {
    try {
        // Connect to MongoDB
        await mongoose.connect(config.db_uri as string);
        console.log("Connected to MongoDB");
        // Start the server
        const server = app.listen(config.port, () => {
            console.log(`App is listening on port ${config.port}`);
        });
        process.on("unhandledRejection", (reason, _promise) => {
            console.error("Unhandled Rejection:", reason);
            server.close(() => {
                console.log("Server shut down due to unhandled promise rejection");
                process.exit(1);
            });
        });
        process.on('uncaughtException', () => {
            console.log(`😈 uncaughtException is detected , shutting down ...`);
            process.exit(1);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
}

startServer();
