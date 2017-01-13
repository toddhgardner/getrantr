var AdModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var AdCollection = Backbone.Collection.extend({
  url: '/api/ads/',
  model: AdModel,

  startRotation: function() {
    this.fetch();
    setInterval(function() {
      this.fetch({ reset: true });
    }.bind(this), 10000);
  }

});
