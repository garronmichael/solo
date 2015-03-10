var CurrentUserView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<p><%= vaccines %></p><p><%= medications %></p><p><%= tests %></p>'),

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

