// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var UserEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= name %>)</td><td><%= vaccines %></td><td><%= medications %></td><td><%= tests %></td>'),

  events: {
    'click': function() {
      console.log(this.model.attributes.name);
      this.model.showcase();
    }
  },

  render: function(){
    var s = '';
    for(key in this.model.attributes.vaccines) {
      console.log(key)
    }
    return this.$el.html(this.template(this.model.attributes));
  }

});
