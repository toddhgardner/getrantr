var AddRantView = Backbone.View.extend({

  events: {
    'submit': 'onSubmit'
  },

  initialize: function() {
    this.$('textarea').on('keyup', this.onChange);
    var text = localStorage.getItem('next-rant');
    if (text) {
      this.$('textarea').val(text);
    }
  },

  onChange: function(evt) {
    var text = (evt.target || {}).value;
    if (text) {
      localStorage.setItem('next-rant', text);
    }
  },

  onSubmit: function(evt) {
    evt.preventDefault();
    var form = evt.target;

    analytics.trackConversion();
    this.collection.create({
      text: form.rant.value
    }, { wait: true });

    form.rant.value = '';
  }

});
