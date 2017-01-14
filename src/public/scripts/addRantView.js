var AddRantView = Backbone.View.extend({

  events: {
    'submit': 'onSubmit',
    'keyup textarea': 'onChange'
  },

  initialize: function() {
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

    this.collection.create({
      text: form.rant.value
    }, { wait: true });

    form.rant.value = '';
  }

});
