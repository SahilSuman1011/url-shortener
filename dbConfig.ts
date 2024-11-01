import mongoose from "mongoose";

const HARDCODED_CONNECTION_STRING = 'mongodb+srv://sahilsuman1202:BE9G3rnSvyiuYC4F@clustershorturl.4mwor.mongodb.net/urlshortener?retryWrites=true&w=majority';

const connectDb = async () => {
    try {
        const connectionString = process.env.CONNECTION_STRING || HARDCODED_CONNECTION_STRING;

        console.log("Using Connection String:", connectionString);

        const connect = await mongoose.connect(connectionString);
        
        console.log("Database connected:", 
            connect.connection.host,
            connect.connection.name
        );
    } catch(error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

export default connectDb;