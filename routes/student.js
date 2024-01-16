var express = require('express');
var router = express.Router();
 var studentModel=require('../scheema/studentmodules')

/*get all students*/
router.get('/get', async function(req, res) { 
  try{
       const student=  await studentModel.find() 
       res.status(200).send({message:'fetch all students !!!',student:student})
  }
    catch(error){  
      
      res.status(500).send({error:'server errror'})
    }
    
  
});   
/*get  students by id*/
router.get('/get/:id', async function(req, res) { 
  try{
       const students=  await studentModel.findOne({_id:req.params.id}) 
       res.status(200).send({message:'fetch sucess perticular students !!!',student:students})
  }
    catch(error){  
      
      res.status(500).send({error:'server errror'})
    }
    
  
});  

/*post students*/
router.post('/post', async function(req, res) {  
  try{
  const student =await studentModel.findOne({email:req.body.email}) 
  if(!student) { 
     const studentNew=  await studentModel.create(req.body) 
     res.status(201).send({message:'new student create sucessfull !!!',student:studentNew})
  }else{  
    res.status(400).send({error:'already student created'})

  }} 
  catch(error){  
    
    res.status(500).send({error:'server errror'})
  }
  
});  

router.patch('/patch/:id', async function(req, res) {  
  try{
  const student =await studentModel.findOne({_id:req.params.id}) 
  if(student) { 
      student.mentorId=req.body.mentorId  
      student.save()
     res.status(201).send({message:'mentor update sucessfull !!!'})
   

  } else { 
    res.status(400).send({error:'student does not exist'})
  }
} 
  catch(error){  
    
    res.status(500).send({error:'server errror'})
  }
  
});

module.exports = router;
