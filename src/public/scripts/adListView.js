var AdView = Backbone.View.extend({

  events: {
    'click .js-hide-ad': 'onHideAd'
  },

  template: function(ad) {
    return `<div class="ad clearfix">
              <a class="ad-link" href="${ad.targetURL}" target="_blank" data-advertiserId="${ad.advertiserId}">
                <img src="${ad.imageURL}" />
              </a>
              <a href="javascript:void(0);" class="js-hide-ad text-sm pull-right">Close</a>
            </div>`;
  },

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    var m = this.model;
    this.el.querySelector('.ad-link').addEventListener('click', function() {
      recordClickAnalytics(m.get('advertiserId'));
    });
    return this;
  },

  onHideAd: function(evt) {
    evt.preventDefault();

    this.model.destroy();
    this.remove();
  }

});

var AdListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.renderAd, this);
    this.$el.on('click', function(evt) {
      var clicked = evt.target.parentElement;
      if (clicked.matches('.ad-link')) {
        recordClickAnalytics(clicked.getAttribute('data-advertiserId'));
      }
    });
  },

  render: function() {
    this.$el.html('');
    this.collection.each((model) => {
      this.renderAd(model);
    });
    return this;
  },

  renderAd: function(ad) {
    var view = new AdView({
      model: ad
    });
    this.$el.prepend(view.render().$el);
  }

});


function recordClickAnalytics() {
  // not really important...
}
