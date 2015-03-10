// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= name %>)</td><td><%= vaccines %></td><td><%= medications %></td><td><%= tests %></td>'),

  events: {
    'click': function() {
      console.log("you click me");
      this.model.showcase();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
