const validator=require("validator"); 
const mongoose=require("mongoose"); 
var date=require('date-and-time')  
 const now = new Date();
 const dates=date.format(now, 'YYYY/MM/DD HH:mm:ss'); 

let mentorSchema= new mongoose.Schema({ 
  mentorname:{type:String,required:true}, 
  mentoremail:{type:String,required:true,lowercase:true, 
 validate:(val)=>{return validator.isEmail(val)}},  
 studentId:[{type: String,
 default:null}],

createat:{type:Date,default:dates}
}) 


const mentorModel= mongoose.model("mentor",mentorSchema);


module.exports= mentorModel;