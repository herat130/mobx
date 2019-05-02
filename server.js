var express = require('express');
var cors= require('cors');
var app = express();

app.use(cors());

app.get('/',(request,response)=>{
    response.send([{name:'herat'},{name:'dhruv'}]).status(200);
});
app.listen(8000,()=>{
    console.log('app running on port 8000');
});