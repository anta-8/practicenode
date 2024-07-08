const mongoose = require("mongoose")

 async function connectToDb(){
    await mongoose.connect("mongodb+srv://anita:passwordhohai@cluster0.qoeszqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database Connected !")
}


module.exports = connectToDb

