// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var UserEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= name %>)</td>'),

  events: {
    'click': function() {
      this.model.showcase();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
