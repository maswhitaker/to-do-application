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
