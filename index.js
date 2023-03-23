
const express = require('express');
const mongoose = require('mongoose');
const User=require('./model/user')

const app = express();
const uri = "";
mongoose.set('strictQuery',false);
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use('/',registrationRouter);
const port = 8000;

app.listen(port, () => {
    console.log(`server is live on port ${port}`)
});