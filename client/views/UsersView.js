var UsersView = Backbone.View.extend({

  tagName: "table",

  className: 'users',

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.append(
      this.collection.map(function(user){
        return new UserEntryView({model: user}).render();
      })
    );
  },

  //below for server


  // initialize: function(){
  //   this.collection.on('sync', this.render, this);
  // },

  // render: function(){
  //   this.collection.forEach(this.renderMessage, this);
  // },

  // renderUser: function(message){
  //     var userView = new UserView({model: user});
  //     this.$el.prepend(userView.render());
  //   }
});