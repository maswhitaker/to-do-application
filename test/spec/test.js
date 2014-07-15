/* global describe, it */



(function () {
    'use strict';

    describe('ToDo Application', function () {
        describe('testing the view', function () {
            it('should expect that the view exists', function () {
              expect(InputView).to.exist
            });
            it("should expect that the new inputView was created.",function(){
              expect(inputView).to.exist
              expect("#input-container").to.exist
            });
            it("should expect the the inputView is rendering",function(){
              expect(inputView.render).to.exist
            });
        });
        describe('testing the models',function(){
          it("should have the InputModel to exist",function(){
            expect(InputModel).to.exist
          });
        })
    });
})();
