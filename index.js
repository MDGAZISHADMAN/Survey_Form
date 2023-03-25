
// const express = require('express');
// const mongoose = require('mongoose');
// const User=require('./model/user')

// const app = express();
// const uri = "mongodb+srv://dk0974935:RyJgGB6dzqYuAGJX@cluster0.cufr1lt.mongodb.net/Cluster0?retryWrites=true&w=majority";
// mongoose.set('strictQuery',false);
// mongoose
//     .connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log("CONNECTED TO DATABASE");
//     });


// // app.use(bodyparser.urlencoded({ extended: false }));
// // app.use(bodyparser.json());
// // app.use('/',registrationRouter);
// const port = 8000;

// app.listen(port, () => {
//     console.log(`server is live on port ${port}`)
// });


const express = require('express');
const cors = require("cors");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const registrationRouter=require('./route/route');
const surveyRouter=require("./route/surveyRoute");
const questionRouter=require('./route/questionRoute');
const User=require('./model/user')

const app = express();
const uri = "mongodb+srv://dk0974935:RyJgGB6dzqYuAGJX@cluster0.cufr1lt.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.set('strictQuery',false);
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });


app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use('/',registrationRouter);
app.use('/survey',surveyRouter);
app.use('/survey/question',questionRouter)

const port = 8000;


app.listen(port, () => {
    console.log(`server is live on port ${port}`)
});
