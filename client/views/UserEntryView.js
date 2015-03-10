// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var UserEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  className: "user",

  template: _.template('<td class="name"><%= name %></td>'),

  events: {
    'click': function() {
      this.model.showcase();
      // this.$el.addClass('selected', 2000);        
    },
    // 'mouseleave': function() {
    //   this.model.blank();
    //   this.$el.removeClass('selected', 10000);  
    // }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));

    //return this.$el  instead of above for server
    // return this.$el;
  }

});
