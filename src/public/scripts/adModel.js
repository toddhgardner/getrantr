var AdModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var AdCollection = Backbone.Collection.extend({
  url: '/api/ads/',
  model: AdModel,

  startRotation: function() {
    console.log('loading ads relevant to you, because I snoop on all your Internetz.');

    this.fetch();
    setInterval(function() {
      this.fetch({ reset: true });
    }.bind(this), 10000);
  }

});
