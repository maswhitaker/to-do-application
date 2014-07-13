// Creation of an IIFE

    // Model Creation named Item
    var Item = Backbone.Model.extend({

    // setting default values for all items created
    defaults: {
        author: "Mason",
        dateToCompleteBy: "",
        content: ""
      }
    });

    // Collection
    var ItemList = Backbone.Collection.extend({

      // listing the Item model as part of the ItemList collection
      model: Item
    });

    // creating a new collection from ItemList named items
    var items = new ItemList();


      // targeting the form and button, with a argument of ev(event), so that the DOM knows to update when an event has been performed
      $('#new-item').submit(function(ev){

        // selecting the exact properties to add into the ItemList collection
        var item = new Item({ author: $('#author-name').val(), content: $("#content-update").val(), dateToCompleteBy: $("#to-do-date").val()});

        // adding the selected properties to the collection
        items.add(item);

        // this return false is used to start/stop the function when all the data is inputed.
        return false;
      });


    // Views
    var ItemsView = Backbone.View.extend({
      model: items,
      // selecting the html element which to send the templated data to
      el: $('#input-container'),
      render: function(){
        // setting the scope so that render is performed on a certain target and not what is inside of the _.each
        var scope = this;

        // reseting the $el div to be empty so that it may be rendered again
        scope.$el.html('');

        // creating a variable to transfer the item model that is created into an array so that _.each may be performed on it.
        var arrayModel = this.model.toArray();

        // creating a _.each to iterate through all items created and input it into the View
        _.each(arrayModel,function(item, i){
          scope.$el.append(new InputView({model: item}).render().$el)
        });
        return this;
      },
      // stating when the function will run(when 'add' is used) and targeting what exactly it will render.
      initialize: function(){
        this.model.on('add', this.render, this);
        this.model.on('delete', this.render, this);
      }
    });

  // creation of a view to set up the template
  var InputView = Backbone.View.extend({

    model: new Item(),
    // listing what type of element will be used
    tagName: 'div',
    events:{
      "click .delete" : "delete"
    },
    delete: function(n ){
      items.remove(this.model);
    },
    initialize: function(){
      this.template = _.template($('#ToDoTemplate').html());
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  var startInput = new ItemsView();
