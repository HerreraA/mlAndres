const express = require("express");
const path = require ("path");

const app = express()
const publicPath= path.resolve(__dirname, "./public")
app.use(express.static(publicPath))

app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000, link puerto: http://localhost:3000")
})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
    
})

app.get('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile (htmlPath)
})

/*revert*/
    
/*<div  class="burger-menu">
            <i id="burger" class="fas fa-bars"></i>
            </div>*/