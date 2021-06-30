const express = require('express'); 
const app = express(); 
// const Api1Route = require('./Routes/Api1Route');
// const Api2Route = require('./Routes/Api2Route')

const cors = require('cors');


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())




// app.use(Api1Route);
// app.use(Api2Route);


const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log(`SERVER IS WATCH ON ${9000}`)
})