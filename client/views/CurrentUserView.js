var CurrentUserView = Backbone.View.extend({

  tagName: 'header',

  template: _.template('<h3><%= name %></h3><div>(<%= name %>)</div><div><%= vaccines %></div><div><%= medications %></div><div><%= tests %></div>'),

  initialize: function() {
    this.render();
  },

  setUser: function(user){
    this.model = user;
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

