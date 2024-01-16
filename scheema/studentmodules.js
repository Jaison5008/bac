const validator=require("validator");  
var date=require('date-and-time')  
 const now = new Date();
 const dates=date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
const mongoose=require("mongoose"); 


let studentSchema= new mongoose.Schema({ 
  name:{type:String,required:true}, 
  email:{type:String,required:true,lowercase:true, 
 validate:(val)=>{return validator.isEmail(val)}}, 
mentorId:{type:String,default:'mentor not assigned'},


createat:{type:Date,default:dates},
}) 


const studentModel= mongoose.model("student",studentSchema);


module.exports= studentModel;