const render = require('./render.js');

module.exports = function(app){
  app.post('/resolver', (req, res, next)=>{
    //handle malformed requests
    if(!req.body || !req.body.code || !req.body.grammar){
      res.status(400);
      return res.end();
    }
    //render
    render(req.body.code, req.body.grammar, (err, html)=>{
      if(err) return next(err);
      res.status(200);
      res.header('content-type', 'text/html');
      res.send(html);
      res.end();
    });
  });
}
