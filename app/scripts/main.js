// basically stuff that doesn't work



// // Creation of an IIFE
// (function($){
//
//     // Model Creation named Item
//     var Item = Backbone.Model.extend({
//
//     // setting default values for all items created
//     defaults: {
//         author: "Mason",
//         dateToCompleteBy: "",
//         content: ""
//       }
//     });
//
//     // Collection
//     var ItemList = Backbone.Collection.extend({
//
//       // listing the Item model as part of the ItemList collection
//       model: Item
//     });
//
//     // creating a new collection from ItemList named items
//     var items = new ItemList();
//
//
//       // targeting the form and button, with a argument of ev(event), so that the DOM knows to update when an event has been performed
//       $('#new-item').submit(function(ev){
//
//         // selecting the exact properties to add into the ItemList collection
//         var item = new Item({ author: $('#author-name').val(), content: $("#content-update").val(), dateToCompleteBy: $("#to-do-date").val()});
//         localStorage.setItem('author',$('#author-name').val());
//         localStorage.setItem('content',$('#content-update').val());
//         // adding the selected properties to the collection
//         items.add(item);
//
//         // this return false is used to start/stop the function when all the data is inputed.
//         return false;
//       });
//
//
//     // Views
//     var ItemsView = Backbone.View.extend({
//       model: items,
//       // selecting the html element which to send the templated data to
//       el: $('#input-container'),
//       render: function(){
//         // setting the scope so that render is performed on a certain target and not what is inside of the _.each
//         var scope = this;
//
//         // reseting the $el div to be empty so that it may be rendered again
//         scope.$el.html('');
//
//         // creating a variable to transfer the item model that is created into an array so that _.each may be performed on it.
//         var arrayModel = this.model.toArray();
//
//         // creating a _.each to iterate through all items created and input it into the View
//         _.each(arrayModel,function(item, i){
//           scope.$el.append(new InputView({model: item}).render().$el)
//         });
//         return this;
//       },
//       // stating when the function will run(when 'add' is used) and targeting what exactly it will render.
//       initialize: function(){
//         this.model.on('add', this.render, this);
//         this.model.on('delete', this.render, this);
//       }
//     });
//
//   // creation of a view to set up the template
//   var InputView = Backbone.View.extend({
//
//     model: new Item(),
//     // listing what type of element will be used
//     tagName: 'div',
//     events:{
//       "click .delete" : "delete"
//     },
//     delete: function(n ){
//       items.remove(this.model);
//     },
//     initialize: function(){
//       this.template = _.template($('#ToDoTemplate').html());
//     },
//     render: function(){
//       this.$el.html(this.template(this.model.toJSON()));
//       return this;
//     }
//   });
//
//   var startInput = new ItemsView();
// })(jQuery);
//
// $('#add').click( function() {
//    var Description = $('#description').val();
//    $('#todos').prepend("<li><input id='check' name='check' type='checkbox'/>" + Description + "</li>");
//    $('#form')[0].reset();
//    var todos = $('#todos').html();
//    localStorage.setItem('todos', todos);
//    if(localStorage.getItem('todos')) {
//      $('#todos').html(localStorage.getItem('todos'));
//    }
//    return false;
// });
//
//
// $('#clear').click( function() {
// window.localStorage.clear();
// location.reload();
// return false;
// });

// $(function(){
//
//   var ItemView = Backbone.View.extend({
//     tagname: 'li',
//     template: _.template($('#item-template').html()),
//     events:{
//       'click a.destroy': 'destroy',
//     },
//     initialize: function(){
//       this.listenTo(this.model, 'destroy', this.remove);
//     },
//     render: function(){
//       this.$el.html(this.template(this.model.toJSON()));
//       return this;
//     }
//   });
//
//   var AppView = Backbone.View.extend({
//     el: $('#todo-app'),
//     events: {
//       "click #add": 'addOne'
//     },
//     initialize: function(){
//       this.input = this.$('#new-todo');
//     },
//     render: function(){
//
//     },
//     addOne: function(todo) {
//       var view = new TodoView({model: todo});
//       this.$("#todo-list").append(view.render().el);
//     }
//   });
//
//   var App = new AppView;
//
// });
// (function(){
//
//
//   var Item = Backbone.Model.extend({
//     defaults: {
//       content: ''
//     }
//   });
//
//
//   var ItemsList = Backbone.Collection.extend({
//        model: Item,
//        localStorage: new Backbone.LocalStorage('todos-backbone')
//    });
//
//   var itemList = new ItemsList;
//
//   var ItemView = Backbone.View.extend({
//
//     model: Item,
//     tagName: 'li',
//     events:{
//       'click #add': 'appendLocal',
//       'click #clear': 'clearAll'
//     },
//     appendLocal: function(){
//       console.log('started');
//       var Description = $('#description').val();
//       $('#todos').prepend("<li>" + Description + "</li>");
//       $('#form')[0].reset();
//       var todos = $('#todos').html();
//       localStorage.setItem('todos', todos);
//       if(localStorage.getItem('todos')){
//         $('#todos').html(localStorage.getItem('todos'));
//       }
//       return false;
//     },
// clearAll: function(){
//   window.localStorage.clear();
//   location.reload();
//   return false;
// }
//   });
// });

// $(function(){
//     //Define Model
//     var Todo = Backbone.Model.extend({
//         defaults: function() {
//             return {
//                 title: "no title...",
//                 order: Todos.nextOrder(),
//                 done: false
//             };
//         },
//         toggle: function() {
//           this.save({done: !this.get("done")});
//         }
//     });
//
//     //Model Collection
// 	var TodoList = Backbone.Collection.extend({
// 		model: Todo,
// 		localStorage: new Backbone.LocalStorage("todos-backbone"),
// 		done: function() {
// 			return this.where({done: true});
// 		},
// 		remaining: function() {
// 			return this.without.apply(this, this.done());
// 		},
// 		nextOrder: function() {
// 			if (!this.length) return 1;
// 			return this.last().get("order") + 1;
// 		},
// 		comparator: 'order'
// 	});
// 	var Todos = new TodoList;
//
//     //Model View & event action
// 	var TodoView = Backbone.View.extend({
// 		tagName:  "li",
// 		template: _.template($("#item-template").html()),
// 		events: {
// 			"click .toggle"   : "toggleDone",
// 			"dblclick .view"  : "edit",
// 			"click a.destroy" : "clear",
// 			"keypress .edit"  : "updateOnEnter",
// 			"blur .edit"      : "close"
// 		},
// 		initialize: function() {
// 			this.listenTo(this.model, "change", this.render);
// 			this.listenTo(this.model, "destroy", this.remove);
// 		},
// 		render: function() {
// 			this.$el.html(this.template(this.model.toJSON()));
// 			this.$el.toggleClass("done", this.model.get("done"));
// 			this.input = this.$(".edit");
// 			return this;
// 		},
// 		toggleDone: function() {
// 			this.model.toggle();
// 		},
// 		edit: function() {
// 			this.$el.addClass("editing");
// 			this.input.focus();
// 		},
// 		close: function() {
// 			var value = this.input.val();
// 			if (!value) {
// 				this.clear();
// 			} else {
// 				this.model.save({title: value});
// 				this.$el.removeClass("editing");
// 			}
// 		},
// 		updateOnEnter: function(e) {
// 			if (e.keyCode == 13) this.close();
// 		},
// 		clear: function() {
// 			this.model.destroy();
// 		}
//
// 	});
//
//     //Make Application
// 	var AppView = Backbone.View.extend({
// 		el: $("#todoapp"),
// 		statsTemplate: _.template($("#stats-template").html()),
// 	    events: {
// 			"keypress #new-todo":  "createOnEnter",
// 			"click #clear-completed": "clearCompleted",
// 			"click #toggle-all": "toggleAllComplete"
// 		},
//
// 		initialize: function() {
// 			this.input = this.$("#new-todo");
// 			this.allCheckbox = this.$("#toggle-all")[0];
//
// 			this.listenTo(Todos, "add", this.addOne);
// 			this.listenTo(Todos, "reset", this.addAll);
// 			this.listenTo(Todos, "all", this.render);
//
// 			this.footer = this.$("footer");
// 			this.main = $("#main");
//
// 			Todos.fetch();
// 		},
//
// 		render: function() {
// 			var done = Todos.done().length;
// 			var remaining = Todos.remaining().length;
//
// 			if (Todos.length) {
// 				this.main.show();
// 				this.footer.show();
// 				this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
// 			} else {
// 				this.main.hide();
// 				this.footer.hide();
// 			}
//
// 			this.allCheckbox.checked = !remaining;
// 		},
//
// 		addOne: function(todo) {
// 			var view = new TodoView({model: todo});
// 			this.$("#todo-list").append(view.render().el);
// 		},
// 		addAll: function() {
// 			Todos.each(this.addOne, this);
// 		},
//
// 		createOnEnter: function(e) {
// 			if (e.keyCode != 13) return;
// 			if (!this.input.val()) return;
//
// 			Todos.create({title: this.input.val()});
// 			this.input.val("");
// 		},
// 		clearCompleted: function() {
// 			_.invoke(Todos.done(), "destroy");
// 			return false;
// 		},
//
// 		toggleAllComplete: function () {
// 			var done = this.allCheckbox.checked;
// 			Todos.each(function (todo) { todo.save({"done": done}); });
// 		}
//
// 	});
// 	var App = new AppView;
//
// }());
