const express = require("express")
const HomeRoutes = require("./src/routes/HomeRoutes")
const UserRoutes = require("./src/routes/UserRoutes")
const AuthRoutes = require("./src/routes/AuthRoutes")
const DiscographyRoutes = require("./src/routes/DiscographyRoutes")
const ConcertRoutes = require("./src/routes/ConcertsRoutes")
const { sessionUser } = require("./src/controllers/AuthController")
const app = express()
const PORT = 3000

app.use(express.json())

app.use(require("express-ejs-layouts"))
app.use(express.static("public"))
app.set("view engine","ejs")

const authorized =(req,res,next)=>{
    if(sessionUser){
        res.json(sessionUser)
        next()
    }else{
        res.send("niste autorizovani")
    }
}

// ROUTES

app.use("/",HomeRoutes)
app.use("/auth",AuthRoutes)
app.use("/user",authorized,UserRoutes)
app.use("/",DiscographyRoutes)
app.use("/",ConcertRoutes)


// PAGE NOTFOUND
app.use((req,res)=>{
    res.status(404).render("error/notFound",{layout:"layouts/blank"})
})

app.listen(PORT,()=>console.log(`Listen app port ${PORT}`))