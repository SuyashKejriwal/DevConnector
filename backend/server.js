const express=require('express');

const app = express();

//Test APIs
app.get('/',(req,res)=> {
    res.send('API is running .. ');
})

const PORT = process.env.PORT||5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.
`));