Exercise 1 - Delete Rant
================

# Goal
User should be able to delete a rant from their timeline using the "delete" control.


# Evidence
- User cannot delete a rant from their timeline.


# Concepts
- Using Keystone Users (`node import 2`)
- [Setting up Workspaces](https://developers.google.com/web/tools/setup/setup-workflow)
  - Chrome > Sources > Context Menu > Add Folder to Workspace
  - Select the getRANTR/src/public Folder
  - Allow Chrome filesystem access
  - Chrome > Sources > Context Menu > Map to File System Resource
- Chrome "Persist Log"
- Chrome DOM Event Listeners
- [Chrome Async Stack traces](https://www.html5rocks.com/en/tutorials/developertools/async-call-stack/)











# Spoilers (Try Yourself First)

## Key Changes

- `/src/public/scripts/rantListView.js:initialize()` Missing `preventDefault` on event

```
initialize: function() {
  this.model.on('change', this.render, this);
  this.$el.on('click', function(evt) {
    if (evt.target.matches('.js-delete')) {
      evt.preventDefault(); // <-- Add This!
      this.onDelete(evt);
    }
  }.bind(this));
},
```

- `/src/public/scripts/rantListView.js:onDelete()` Loss of function context (this).

```
// Many possible solutions
onDelete: function() {
  setTimeout(function() {
    this.model.destroy();
    this.remove();
  }.bind(this)); // <-- Add .bind(this)
}
```

## More Information

- [Event PreventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [Function Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
