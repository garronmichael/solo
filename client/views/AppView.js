// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.currentUserView = new CurrentUserView({model: this.model.get('currentUser')});
    this.usersView = new UsersView({collection: this.model.get('users')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentUser', function(model){
      this.currentUserView.setUser(model.get('currentUser'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.usersView.$el,
      this.currentUserView.$el
    ]);
  }

});