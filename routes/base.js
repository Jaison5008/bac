var express = require('express');
var router = express.Router(); 
https://back-n4a5.onrender.com/mentor/get    

router.get('/', async function(req, res) { 
    try{
         
         res.status(200).send({message: 
           'https://back-n4a5.onrender.com/student/get  https://back-n4a5.onrender.com/student/patch/65a6bcb7f66e219d14ddb13d https://back-n4a5.onrender.com/student/get/65a6bcb7f66e219d14ddb13d https://back-n4a5.onrender.com/mentor/get https://back-n4a5.onrender.com/mentor/patch/65a6bd5bf66e219d14ddb145  https://back-n4a5.onrender.com/mentor/post'})
    }
      catch(error){  
        
        res.status(500).send({error:'server errror'})
      }
      
    
  });  







module.exports = router;
