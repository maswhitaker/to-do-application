/* global describe, it */



(function () {
    'use strict';
    var InputModel = Backbone.Model.extend({
      initialize: function(){

      },
    defaults: {
      author: "Mason",
      dateToCompleteBy: "",
      content: "",
      month: "",
      day: "",
      dateInputed: ""
    },
    events: {
      "click input[type=button]": "sendInput"
    },
    sendInput: function(){
      InputView.set({content: $("#input-text"),})
    }
    });

    var InputView = Backbone.View.extend({
      initialize: function(){
        this.render();
      },
      render: function(){
        var template = _.template( $("#ToDoTemplate").html(), {});
        this.$el.html(template);
      },
      events: {
        "click input[type=button]": "getInput"
      },
      getInput: function(){
        alert( "Are you sure you want to add " + $("#input-text").val() + " to your ToDo list?" );
      }
    });

    var inputView = new InputView({ el: ("#input-container") })

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
