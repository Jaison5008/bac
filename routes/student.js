var express = require('express');
var router = express.Router();
 var studentModel=require('../scheema/studentmodules')

/*get all students  https://back-n4a5.onrender.com/student/get   */ 

router.get('/get', async function(req, res) { 
  try{
       const student=  await studentModel.find() 
       res.status(200).send({message:'fetch all students !!!',student:student})
  }
    catch(error){  
      
      res.status(500).send({error:'server errror'})
    }
    
  
});   
/*get  students by id   https://back-n4a5.onrender.com/student/get/65a6bcb7f66e219d14ddb13d  */
router.get('/get/:id', async function(req, res) { 
  try{
       const students=  await studentModel.findOne({_id:req.params.id}) 
       res.status(200).send({message:'fetch sucess perticular students !!!',student:students})
  }
    catch(error){  
      
      res.status(500).send({error:'server errror'})
    }
    
  
});  

/*post students https://back-n4a5.onrender.com/student/post   */
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
/*https://back-n4a5.onrender.com/student/patch/65a6bcb7f66e219d14ddb13d*/
router.patch('/patch/:id', async function(req, res) {  
  try{
  const student =await studentModel.findOne({_id:req.params.id}) 
  if(student) { 
      student.mentorId=req.body.mentorId  
      student.save() 
      console.log(student)
     res.status(201).send({message:'mentor update sucessfull !!!',students:student})
   

  } else { 
    res.status(400).send({error:'student does not exist'})
  }
} 
  catch(error){  
    
    res.status(500).send({error:'server errror'})
  }
  
});

module.exports = router;
