const mongoose=require('mongoose');


const Survey=mongoose.Schema({
    name: String,
    description: String,
    type: String,
    startDate: String,
    endDate: String,
    otherCriteria: String,
    image: String
});

module.exports=mongoose.model("Survey" ,Survey);