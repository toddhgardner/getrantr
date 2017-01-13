var UserView = Backbone.View.extend({

  template: function(user) {
    return `<div class="profile">
              <img src="${user.imageURL}" alt="${user.name}" />
              <div class="name">Ranting as <br><strong>${user.name}</strong></div>
              <div class="join">Since ${moment(user.joinedOn).format('MMMM YYYY')}</div>
            </div>`;
  },

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
