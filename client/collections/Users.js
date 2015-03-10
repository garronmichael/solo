// Songs.js - Defines a backbone collection class for songs.
var Users = Backbone.Collection.extend({

  model: UserModel,
  url: '/data/data.js',

  loadUsers: function(){
    this.fetch({data: { order: 'name' }});
  },

  parse: function(response, options){
    console.log(response);
    var results = [];
    for( var i = response.results.length-1; i >= 0; i-- ){
      results.push(response.results[i]);
    }
    return results;
  }

});