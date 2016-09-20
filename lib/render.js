const fs = require('fs');

const highlight = require('highlight').Highlight;
const inlineCSS = require('inline-css');


let style = fs.readFileSync('./node_modules/highlight/lib/vendor/highlight.js/styles/github.css', 'utf8');

module.exports = function(code, grammar, cb){
  let htmlCode = `<pre>${highlight(code)}</pre>`;
  inlineCSS(htmlCode, {extraCss: style, url: '//localhost/'})
  .then(function(prettyCode){
    return cb(null, prettyCode);
  }).catch(function(err){
    return cb(err, null);
  });
}
