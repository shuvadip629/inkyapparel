const express = require('express');
const mongoose=require('mongoose')
const ejs=require('ejs')
const app = express();
const port = 3000;
const path=require('path')
const form= require('./src/model/model')
// Configure EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));
require('./src/db/db');
app.use(express.urlencoded({extended:true}))

// Define a route to render your EJS template
app.get('/', (req, res) => {
  res.render('index'); // Render the 'index.ejs' template
});
app.post('/submit', async(req,res)=>{
  try{
      const formData= new form({
          name:req.body.name,
          email:req.body.email,
          phno:req.body.phno,
          city:req.body.city,
          producttype:req.body.producttype,
          size:req.body.size,
          quantity:req.body.quantity,
          Address:req.body.Address,
          Address2:req.body.Address2,
          state:req.body.state,
          zipcode:req.body.zipcode,
          

      });
      const postData= await formData.save();
      req.setEncoding(postData);
  }
  catch(error){
      res.send(error);
  }

  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
