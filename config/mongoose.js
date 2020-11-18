const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ToDoApp_db');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connection to db'));

db.once('open',function(){
  console.log('successfully connected to the database');
});