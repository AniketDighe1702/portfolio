const express = require("express");
const path = require('path');
// const fs = require("fs").promises;
const router  = require('./src/routes/main.route');




const app = express();
const PORT = process.env.PORT || 4000;;

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.resolve(__dirname+'/public')));
app.use(router);




app.listen(PORT, (req, res)=>{
    console.log(`Server Listening on : http://localhost:${PORT}/`);
})