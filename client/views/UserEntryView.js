// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var UserEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'div',

  className: "user",

  template: _.template('<div class="name"><%= name %></div>'),

  events: {
    'click': function() {
      this.model.showcase();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
