const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const {Sum, SumWithPromise, SumWithCallback} = require("../../src/index");

describe("Index Test Suite", function(){
    context("To test the Sum function on the Math library", function(){

        it("should return 55 when called to add 25 and 30", function(){
            const varA = 25;
            const varB = 30;
            Sum(varA, varB)
            .should.equal(55);
        })
       
        it("should throw 'Error' exception called without parameters", function(){
            expect(() => Sum()).to.throw("Function called without parameters"); 
        })

        it("should pass the Sum function that returns a promise object is called with parameters", function(){
            const varA = 30;
            const varB = 30;
            const sumWithPromise = (60);
            SumWithPromise(varA, varB)
            .then(actual => actual.should.deep.equal(sumWithPromise));
        })

        it("should fail when the Sum function that returns a promise object is called without parameters", function(){
            const errMsg = "Function called without parameters";
            SumWithPromise()
            .catch(error => error.should.deep.equal(errMsg));
        })

        it("should pass with '9' when the Sum function that returns callback is called with parameters 4 and 5", function(){
            SumWithCallback(4, 5, (error, result)=>{
                result.should.equal(9);
                done(error);
            })
        })

        it("should fail when the Sum function that returns callback is called without parameters", function(){
            const errMsg = "Function called without parameters";
            SumWithCallback((error)=>{
                error.should.be.an("error");
                done();
            })
        })

    })
})