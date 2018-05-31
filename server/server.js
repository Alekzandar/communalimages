const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');

const app = express();

//reference database link 
const config = require('./database/DB');
const ImagePortRouter = require('./routes/ImagePortRoutes');

//connect to database
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected!') },
    err => { console.log('Ruh oh, could notxw connect to the database' +err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/imageport', ImagePortRouter);

app.listen(PORT, function(){
  console.log('Server is running on designated local port: ',PORT);
});