import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sandipbasaktomato:7894561230@cluster0.ea7ci.mongodb.net/food-del')
    .then(()=>{
        console.log("Database Connected");
    })
}