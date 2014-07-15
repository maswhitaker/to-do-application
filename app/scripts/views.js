var TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($("#item-template").html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var AppView = Backbone.View.extend({
  el: "#todoapp",
  initialize: function(){
    this.input = this.$('#new-todo');
    todoList.on('add', this.addAll, this);
    todoList.fetch();
  },
  events:{
    'click #add': 'createTodo',
    'click #clear': 'clearLocal',
    
  },
  clearLocal: function(){
    window.localStorage.clear();
    location.reload();
    return false;
  },
  createTodo: function(){
    todoList.create(this.newAttributes());
    this.input.val('');
  },
  addOne: function(todo){
    var view = new TodoView({model: todo});
    $('#todo-list').append(view.render().el);
  },
  addAll: function(){
    this.$('#todo-list').html('');
    todoList.each(this.addOne,this);
  },
  newAttributes: function(){
    return{
      content: this.input.val().trim()
    }
  }
});
var appView = new AppView();
