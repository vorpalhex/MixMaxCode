const pygments = require('pygments').colorize;

module.exports = function(code, grammar, cb){
  pygments(code, grammar, 'html', (data)=>{
    //standardize our callback to be Node-ish
    return cb(null, data);
  });
}
