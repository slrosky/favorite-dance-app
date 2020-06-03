require('dotenv').config();
require('./config/database');
const Studio = require('./models/studio');
const Class = require('./models/class');
const data = require('./data');

 Studio.create(data.studios)
.then(function() {
  return Class.create(data.classes);
})
.then(function() {
    console.log('all done')
  process.exit();
});