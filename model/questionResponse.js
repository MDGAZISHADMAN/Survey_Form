const mongoose=require('mongoose');

const QuestionResponse=mongoose.Schema({
    question: String,
    answer: String
});

module.exports=mongoose.model("QuestionResponse" ,QuestionResponse);