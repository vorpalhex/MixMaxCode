const assert = require('chai').assert;
const request = require('request');

describe('Resolver API Endpoint', ()=>{

  it('should successfully resolve a simple function', (done)=>{
    request.post('http://localhost:3000/resolver', {
      body: {
        grammar: 'javascript',
        code: 'function helloworld(){ return console.log(\'hello world\'); }'
      },
      json: true
    }, (err, res, body)=>{
      if(err) return done(err);
      assert.equal(res.body,
        `<pre><span class="keyword" style="color: #000; font-weight: bold;">function</span> helloworld(){ <span class="keyword" style="color: #000; font-weight: bold;">return</span> console.log(<span class="string" style="color: #d14;">\'hello world\'</span>); }</pre>`,
        'output matches'
      );
      return done();
    });
  });

  it('should receive a 400 on a malformed request', (done)=>{
    request.post('http://localhost:3000/resolver', {
      body: JSON.stringify({
        grammar: ''
      })
    }, (err, res, body)=>{
      if(err) return done(err);
      assert.equal(res.statusCode, 400, '400 on malformed response');
      return done();
    });
  });

});
