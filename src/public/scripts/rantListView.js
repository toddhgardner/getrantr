var RantView = Backbone.View.extend({

  events: {
    'click .js-delete': 'onDelete'
  },

  template: function(rant) {
    return `<div class="rant">
              <img src="${rant.imageURL}" alt="${rant.name}" />
              <div class="rant-content">
                <div class="status-text text-lg"><strong>${rant.name}</strong></div>
                <div class="status-text text-lg">${rant.text}</div>
              </div>
              <div class="rant-meta">
                <button class="btn btn-link js-delete">delete</button>
                <div class="pull-right">${moment(rant.timestamp).fromNow()}</div>
              </div>
            </div>`;
  },

	initialize: function() {
		this.model.on('change', this.render, this);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	// format: function (model) {
	// 	var formatted = model.toJSON();
  // 	formatted.timestamp = moment(formatted.timestamp).fromNow();
  // 	return formatted;
	// },

  onDelete: function(evt) {
    evt.preventDefault();

    this.model.destroy();
    this.remove();
  }

});

var RantListView = Backbone.View.extend({

	events: {},

	initialize: function () {
		this.collection.on('reset', this.render, this);
		this.collection.on('add', this.renderStatement, this);
	},

	render: function () {
		console.info("rendering statement list with " + this.collection.length + " entries");
		this.$el.html('');
		this.collection.each(this.renderStatement, this);
		return this;
	},

	renderStatement: function (model) {
		var view = new RantView({
			model: model
		});
		this.$el.prepend(view.render().$el);
	}

});
