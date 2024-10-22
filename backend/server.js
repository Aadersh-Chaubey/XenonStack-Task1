const express = require('express');
const connectDB = require("./config/db");
const dotenv=require('dotenv');
const authRoutes = require('./routes/auth');
const fetchRoutes=require('./routes/fetch')
connectDB();
const app = express();

dotenv.config();


const cors = require('cors');

// Use CORS to allow requests from frontend (React)
app.use(cors({
    origin:"https://xenon-stack-task1-seven.vercel.app",
    methods:["POST","GET"],
    credentials:true
    
}));
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/fetch', fetchRoutes);


const PORT =  8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
