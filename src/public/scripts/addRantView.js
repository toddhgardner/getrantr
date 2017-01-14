var AddRantView = Backbone.View.extend({

  events: {
    submit: 'onSubmit'
  },

  onSubmit: function(evt) {
    evt.preventDefault();
    var form = evt.target;

    this.collection.create({
      text: form.rant.value
    }, { wait: true });

    form.rant.value = '';
  }

});
