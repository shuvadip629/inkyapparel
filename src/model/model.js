const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({

    name: String,
        
    
    email: String,
       

    phno:  Number,
        
    
    city: String ,
       
    
    producttype: String,
       
    
    size:  String,
        
    
    quantity:Number,
    
    Address: String,
      
  
    Address2: String,
       
    
    state: String,
       
   
    zipcode: Number,
        
    
    

})


const form = new mongoose.model('form', formSchema);

module.exports = form;