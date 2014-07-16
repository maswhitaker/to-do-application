var Todo = Backbone.Model.extend({
  defaults: {
    content: ''
  }
});

var TodoList = Backbone.Collection.extend({
     model: Todo,
     localStorage: new Backbone.LocalStorage('backbone-todo'),
 });

var todoList = new TodoList();

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
    'click #delete': 'deleteItem'
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
  },
  deleteItem: function(e){
    var lsKeys = Object.keys(localStorage).slice(1);
    var content = $(e.target).siblings("span").text().trim();
    var idToRemove;
    _.find(lsKeys, function (key) {
      var todoObj = JSON.parse(localStorage[key]);
      if (todoObj.content === content) {
        idToRemove = todoObj.id;
        return true;
      }
    });
    localStorage.removeItem('backbone-todo-' + idToRemove);
    window.location.reload();
   }
});

var appView = new AppView();

var AppRouter = Backbone.Router.extend({
	routes: {
		'': 'showTodos'
	},
	showTodos: function(){
		var App = new AppView();
	}
});

new AppRouter();
Backbone.history.start();
