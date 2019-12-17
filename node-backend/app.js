//Libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//server configuration
const basePath = '/notes';
const port = 6200;

// Connection to DB
mongoose.connect('mongodb://mongodb', { useUnifiedTopology: true })
  .then(() => {
    console.log('Backend Started');
  })
  .catch(err => {
      console.error('Backend error:', err.stack);
      process.exit(1);
  });

// Routes and Backend Funcioncalities
var notesRoutes = require('./src/routes/notesRoutes');

// App Instance
var app = express();
app.use(express.static('public'));

app.use(cors({
  origin: function(origin, callback){
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, notesRoutes);
app.use(cookieParser());

app.use('/user', require('./src/routes/userRoutes'));

// Execute App
app.listen(port, () => {
  console.log('Notes Backend running on Port: ',port);
});