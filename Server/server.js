const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000 ;

// Middleware 
app.use(cors());
app.use(express.json());

//routes
app.get('/',(req, res)=>{
    res.send('API is running...')
});

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT,() => console.log(`Server Running on PORT ${PORT}`));
})
.catch(err => console.error(err));