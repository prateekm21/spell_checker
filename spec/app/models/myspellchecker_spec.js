var path    = require('path');
var root    = path.join(__dirname + "/../../../");

var request = require('supertest');
var sinon   = require('sinon');
var should  = require('should');

var sc      = require(root + "app/models/myspellchecker");

require(root + "config/globals");

describe('MySpellChecker', function(){

  describe('#contructor()', function(){
    it('should create class instance', function(){
      var checker = new sc("FAKE");
      (checker.klass).should.equal('MySpellChecker');
      (checker.word).should.equal('FAKE');
    });
  }); // describe

  describe('#check()', function(){
    it('return response for word check', function(done){
      var checker = new sc("FAKE");

      var fn_post = function(ccb){
        ccb(undefined, {status: true});
      };
      
      var stub = sinon.stub(checker, 'check', fn_post)

      checker.check( function(error, response) {
        (response.status).should.be.true
        done();
      });
    });
  }); // describe

});