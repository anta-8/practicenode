const express = require("express");
const connectToDb = require("./database/databaseConnection");
const app = express();

connectToDb


app.set('view engine',"ejs")
connectToDb()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    console.log(req);
    res.send("<h1>this is about page</h1>");
})

app.get("/about",(req,res)=>{
        consname = "anita magar"
        res.render("about.ejs",{consname})
    })

    app.get("/contact",(req,res)=>{
        consnumber="9866342517"
        res.render("contact.ejs",{consnumber})
    })

    app.get("/createblog",(req,res)=>{
        
        res.render("./createblog.ejs")
    })
    
    app.post("/createblog",async (req,res) => {
    // 
    const{title,subtitle,description} = res.body
    console.log(title,subtitle,description)
       
      
      await Blog.create ({
        title,
        subtitle,
        description
      })

      res.send("post hitted") 
    })

    
    app.listen(3000,()=>{
    console.log("Node js project has astarted at port"+3000)
    })