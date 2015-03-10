// SongModel.js - Defines a backbone model class for songs.
var UserModel = Backbone.Model.extend({

  defaults: {
    'name': '',
    'vaccines': '',
    'medications': '',
    'tests': ''
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection

    var currentCount = this.get('count');
    currentCount++;
    this.set({'count': currentCount});
    this.trigger('play', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  blank: function() {
    this.trigger('blank', this);
  },
  showcase: function(){
    this.trigger('showcase', this);
  }

});
