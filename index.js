const { Console } = require('console');
const express = require('express');

const db = require('./config/mongoose');  

//***** Activty.js is schema for mongodb database ******//
const Activity = require('./models/activity');

const app = express();
const port = 8000;
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

// Insde makeover forlder css and js files reside 
//and working as static files by giving support for css and javaScript code

app.use(express.static('makeover'));

const first = [ 
    {
      work : "task",
      categ : "category",
      time : "Date"
    }
]

app.get('/',function(req,res) {

    Activity.find({},function(err,activities){
      
        if(err){
            console.log('Error in fetching data from database');
            return;
        }
       return res.render('home',{
           title:"ToDoApp",
        initial:activities
       });
    });

});

app.post('/create-ToDoApp',function(req,res) {
     

    Activity.create({
        work: req.body.task,
        categ: req.body.category,
        time: req.body.date
    },function(err,newActivity){
        if(err){
            console.log('There is error in creating an Activity in the database');
            return;
        }
        console.log('******',newActivity);
        res.redirect('back');
    });

});

//******** getting task form javaScript through checkbox value and matching them for deletion */
app.get('/delete-task/:id',function(req,res){
    

     let id = req.params.id;
     Activity.findByIdAndDelete(id,function(err){
        if(err) {
        console.log("error in deleting an object from database");
        return;
        }
    
        return res.redirect('back');
    });
});

app.listen(port,function(err) {
    if(err) {
        console.log("Something went wrong");
    }
    console.log("good..");
});