const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const path = require("path")

const app = express();
app.set("view engine","pug")
app.use(bodyParser.urlencoded({extended:true}));
app.use('/admin',adminData.routes)
app.use('/',shopRoutes)

app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3301);
