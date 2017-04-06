Exercise 4 - Substr of Null
================

# Goal
Why does a single user get `cannot read substr of null` errors?


# Evidence
- Using "Alt Todd" Account (`node import 3`)
- UI is not fully shown
- Error visible in console


# Concepts
- Chrome Network Inspector and Preview
- Chrome Source debugger and stepping








# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/rantListView.js:render()` Should check for valid rant before rendering

```
render: function() {
  var rant = this.model.toJSON();
  if (typeof rant.text !== 'string') { // <-- add this validation check
    console.error('invalid rant data', rant);
    rant.text = 'Sorry! An error occurred with this rant. Our team is on it!';
  }

  this.$el.html(this.template(rant));
  return this;
},
```

## Solution Links
