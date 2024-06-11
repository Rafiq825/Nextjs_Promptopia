import mongoose from "mongoose";

let isConnected=false;

export const connectDB=async()=>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("DB is already connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGOODB_URI,{
            dbName:'Share_prompt',
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true;
        console.log("DB is connected");
    }
        catch (err){
        console.log(error)
        }
}