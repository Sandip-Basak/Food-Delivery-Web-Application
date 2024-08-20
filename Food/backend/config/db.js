import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://database_name:password@cluster0.ea7ci.mongodb.net/food-del')
    .then(()=>{
        console.log("Database Connected");
    })
}