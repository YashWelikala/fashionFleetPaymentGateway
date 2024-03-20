const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose")

const app=express();

require("dotenv").config()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>
{
    res.send("Welcome to Fashion Fleet API... ")
});

const port= process.env.PORT ||5000;
const uri=process.env.DB_URI

app.listen(port, () => {
    console.log(`Server running on port ${port}`); // This logs the message when the server starts listening.
});

mongoose.connect(uri)
.then(() => {
    console.log("MongoDB connection successful...");

    app.listen(port, () => {
        console.log(`Server running on port ${port}`); // Ensure this is inside the .then() block
    });
})
.catch((err) => console.log("MongoDB connection Failed", err.message));
