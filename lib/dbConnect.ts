import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to Database");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || '', {})
        connection.isConnected = db.connections[0].readyState

        console.log("Connected to Database successfully");
    } catch (err) {
        console.log("Error connecting to Database", err);
        process.exit(1);

    }
}

export default dbConnect;