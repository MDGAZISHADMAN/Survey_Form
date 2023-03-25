const express = require('express');
const router = express.Router();
const UserSurvey = require('../model/userSurvey');



router.post('/create', (req, res) => {
    const survey = new UserSurvey(req.body);
    survey.save((err, success) => {
        res.send({ success })
    })
});



router.param("id", (req, res, next, id) => {
  UserSurvey.find({_id:id}).exec((err, surveys) => {
   
    if (err || !surveys) {
      return res.status(400).json({
        error: `Something went wrong in finding surveys`,
      });
    }
    
    req.survey=surveys;
    
    next();
  });
});



router.get('/surveys',  (req, res) => {
    UserSurvey.find().sort("-createdAt")
    .exec((err, surveys) => {
      
      if (err || !surveys) {
        return res.status(400).json({
          error: "Something went wrong in finding all surveys",
        });
      }
      
      res.json(surveys);
    });
});


router.get('/surveys/:id',(req,res)=>{
    res.json(req.survey)
});

router.delete('/surveys/:id/delete',(req,res)=>{
  console.log(req.survey[0]);
  const survey=req.survey[0];
  
  survey.remove((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong while deleting the category",
      });
    }
    
    res.json({
      deleted: survey,
      message: "survey deleted successfully!",
    });
  })
});



router.put('/surveys/:id/update',(req,res)=>{
  const survey=req.survey[0];
  survey.name=req.body.name;
  survey.description=req.body.description;
  survey.otherCrietria=req.body.otherCrietria;

  survey.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: "something went wrong while updating",
      });
    }
    
    res.json(t);
  });
})

module.exports = router;