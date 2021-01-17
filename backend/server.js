import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import usersRoutes from './routes/userRoutes.js'

const app = express();

dotenv.config();

connectDB();

//Test APIs
app.get('/',(req,res)=> {
    res.send('API is running .. ');
})

//Routes
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT||5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.
`));