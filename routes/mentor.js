var express = require('express');
var router = express.Router();
 var mentorModel=require('../scheema/mentormoduel')  
 /*https://back-n4a5.onrender.com/mentor/get    */

router.get('/get', async function(req, res) { 
  try{
       const mentor=  await mentorModel.find() 
       res.status(200).send({message:'fetch all mentor !!!',mentorList:mentor})
  }
    catch(error){  
      
      res.status(500).send({error:'server errror'})
    }
    
  
});  

/*https://back-n4a5.onrender.com/mentor/post */


router.post('/post', async function(req, res) {  
  try{
  const mentors =await mentorModel.findOne({mentoremail:req.body.mentoremail})  
  console.log(mentors)
  if(!mentors) { 
     const mentorNew=  await mentorModel.create(req.body) 
     res.status(201).send({message:'new mentor create sucessfull !!!',mentor:mentorNew})
  }else{  
    res.status(400).send({error:'already mentor created'})

  }} 
  catch(error){  
    
    res.status(500).send({error:'server errror'})
  }
  
});   
/*https://back-n4a5.onrender.com/mentor/patch/65a6bd5bf66e219d14ddb145   */


router.patch('/patch/:id', async function(req, res) {  
  try{
  const mentor =await mentorModel.findOne({_id:req.params.id}) 
  if(mentor) { 
      mentor.studentId= [...mentor.studentId ,...req.body.studentId] ;
      mentor.save()
     res.status(201).send({message:'update sucessfull !!!',mentor:mentor})
  }else{  
    res.status(400).send({error:'does not exist'})

  }} 
  catch(error){  
    
    res.status(500).send({error:'server errror'})
  }
  
});
module.exports = router;
