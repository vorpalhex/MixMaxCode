const fs = require('fs');

const highlight = require('highlight').Highlight;
const inlineCSS = require('inline-css'); //moves styles from our file to our html

//only ever need to load this once, load it from the module for updates
let style = fs.readFileSync('./node_modules/highlight/lib/vendor/highlight.js/styles/github.css', 'utf8');

module.exports = function(code, grammar, cb){
  let htmlCode = `<pre>${highlight(code)}</pre>`; //wrap in pre tags for styles to work
  inlineCSS(htmlCode, {extraCss: style, url: '//localhost/'})
  .then(function(prettyCode){ //standardize our CB pattern
    return cb(null, prettyCode);
  }).catch(function(err){
    return cb(err, null);
  });
}
