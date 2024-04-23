import mongoose, { connect, disconnect } from "mongoose";
export default async function conncectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL); 
    } catch (error) {
        console.log(error); 
        throw new Error("Cannot Connect To MongoDB")
    }
}

async function disconnectFromDatabase () {
    try {
        await disconnect(); 
    } catch (error) {
        console.log(error); 
        throw new Error("Cannot Connect To MongoDB"); 
    }
}

export {conncectToDatabase, disconnectFromDatabase}