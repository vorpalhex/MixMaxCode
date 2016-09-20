const render = require('./render.js');

module.exports = function(app){
  app.post('/resolver', (req, res, next)=>{
    //do render
    render(req.body.code, req.body.grammar, (err, html)=>{
      if(err) return next(err);
      res.status(200);
      res.header('content-type', 'text/html');
      res.send(html);
      res.end();
    });
  });
}
