var RantModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var RantCollection = Backbone.Collection.extend({
  url: '/api/rants/',
  comparator: 'timestamp',
  model: RantModel
});
