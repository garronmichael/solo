var CurrentUserView = Backbone.View.extend({

  tagName: 'div',

  className: 'current',

  template: _.template('<p><span>vaccines :</span> <%= vaccines %></p><p><span>medications :</span> <%= medications %></p><p><span>tests :</span> <%= tests %></p>'),

  initialize: function() {
  },

  setUser: function(user){
    this.model = user;
    this.render();
  },

  render: function(){
    if(this.model.attributes.tests === '') { return this.$el.html(''); }
    return this.$el.html(this.template(this.model.attributes));
  }

});

