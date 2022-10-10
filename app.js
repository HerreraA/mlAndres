const express = require("express");
const path = require ("path");
const port =  process.env.PORT || 3001;

const app = express()
const publicPath= path.resolve(__dirname, "./public")
app.use(express.static(publicPath))


app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
    
})

app.get('/login.html', (req, res) => {
    let htmlPath = path.join(__dirname, './views/login.html');
    res.sendFile (htmlPath)
})

app.listen(port, ()=> console.log("servidor corriendo en el puerto ${port}"));

/*revert*/
    
/*<div  class="burger-menu">
            <i id="burger" class="fas fa-bars"></i>
            </div>*/