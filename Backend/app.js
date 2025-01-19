const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const cookieParser=require("cookie-parser");
const connectDB=require('./db/db');
const userRoutes=require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapRoutes=require("./routes/maps.routes");
const rideRoutes=require("./routes/ride.routes");
const path =require('path');



connectDB()
const app=express();
const _dirname=path.resolve()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(cookieParser());
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.use('/users',userRoutes);
app.use("/captains",captainRoutes);
app.use('/maps',mapRoutes)
app.use("/rides",rideRoutes);

app.use(express.static(path.join(__dirname,"../Frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
}) 

app.use(cors({
    origin: " http://localhost:5173", 
    credentials: true
}));
module.exports=app;