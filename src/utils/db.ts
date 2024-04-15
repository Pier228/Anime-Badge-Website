import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dancefloor.arxc6wf.mongodb.net/?retryWrites=true&w=majority&appName=danceFloor`,
            { dbName: "dance_floor" }
        );
    } catch (error) {
        throw new Error("Connection failed!");
    }
};

export default connect;
