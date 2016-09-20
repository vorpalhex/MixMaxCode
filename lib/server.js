const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const serveStatic = require('serve-static');

if(!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

const conf = require(`${__dirname}/../config/config.${process.env.NODE_ENV}.json`);
const routes = require('./routes.js');

module.exports = function(cb){
  //handle json bodies and open up for CORs
  app.use(bodyParser.json());
  app.use(cors());

  //serve our client files
  app.use('/', serveStatic('client'));

  //load our routes
  routes(app);

  //handle errors
  app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500);
    res.end();
  });

  //final handler to capture 404s
  app.use((req, res, next)=>{
    console.log(`${req.url} : 404`);
    res.status(404);
    res.end();
  });


  app.listen(conf.server.port, cb);
}
