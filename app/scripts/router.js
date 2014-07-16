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
