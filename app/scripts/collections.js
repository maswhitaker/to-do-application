var TodoList = Backbone.Collection.extend({
     model: Todo,
     localStorage: new Backbone.LocalStorage('backbone-todo'),
 });

var todoList = new TodoList();
