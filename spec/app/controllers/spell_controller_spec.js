var path    = require('path');
var root    = path.join(__dirname + "/../../../");
var server  = require('compound').createServer({root: root});

var request = require('supertest');
var sinon   = require('sinon');
var should  = require('should');

describe('SpellController', function(){

  describe('#check_spelling()', function(){

    it('should return response', function(done){
      
      //Hack to stub compound controller
      var brg = server.compound.controllerBridge;
      sinon.stub(brg, "callControllerAction", function(controller, action, req, res, errFn) {
        res.send({okay: true, name: 'jack'});
      });

      request(server).get('/spell_checker/specs').end(function(err, res) {
        (res.body.okay).should.equal(true);
        (res.body.name).should.equal('jack');
        done();
      });
    });
  });//describe

});//describe