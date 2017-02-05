var AdModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var AdCollection = Backbone.Collection.extend({
  url: '/api/ads/',
  model: AdModel
});
