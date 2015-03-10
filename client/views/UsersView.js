var UsersView = Backbone.View.extend({

  tagName: "table",

  className: 'users',

  initialize: function() {
    this.render();
    // this.collection.on('add remove', this.render, this);
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
  }

});