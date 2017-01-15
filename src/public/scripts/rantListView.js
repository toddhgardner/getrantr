var RantView = Backbone.View.extend({

  template: function(rant) {
    return `<div class="rant">
              <img src="${rant.imageURL}" alt="${rant.name}" />
              <div class="rant-content">
                <div class="status-text text-lg"><strong>${rant.name}</strong></div>
                <div class="status-text text-lg">${rant.text}</div>
              </div>
              <div class="rant-meta">
                <form><button class="btn btn-link js-delete">delete</button></form>
                <div class="pull-right">${moment(rant.timestamp).fromNow()}</div>
              </div>
            </div>`;
  },

  initialize: function() {
    this.model.on('change', this.render, this);
    this.$el.on('click', function(evt) {
      if (evt.target.matches('.js-delete')) {
        this.onDelete(evt);
      }
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  onDelete: function() {
    console.log('I told you that you\'d regret it. But does anyone listen to me? No, I\'m just a hyper-intelligent JavaScript computer. Brain the size of a planet.');
    setTimeout(function() {
      this.model.destroy();
      this.remove();
    });
  }

});

var RantListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.renderStatement, this);
  },

  render: function() {
    this.$el.html('');
    this.collection.each(this.renderStatement, this);
    return this;
  },

  renderStatement: function(model) {
    var view = new RantView({ model: model });
    this.$el.prepend(view.render().$el);
  }

});
