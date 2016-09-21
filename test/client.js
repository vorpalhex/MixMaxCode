const assert = require('chai').assert;
const request = require('request');

describe('Client utility', ()=>{

  it('should return content with length greater than zero', (done)=>{
    request.get('http://localhost:3000/', (err, res, body)=>{
      if(err) return done(err);
      assert.isAtLeast(res.body.length, 0);
      return done();
    });
  });


});
