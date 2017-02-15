Exercise 2 - Delete Rant
================

# Goal
User should be able to delete a rant from their timeline using the "delete" control.


# Evidence
- User cannot delete a rant from their timeline.


# Concepts
- Chrome "Persist Log"
- Chrome DOM Event Listeners
- [Chrome Async Stack traces](https://www.html5rocks.com/en/tutorials/developertools/async-call-stack/)








# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/rantListView.js:initialize()` Missing `preventDefault` on event
- `/src/public/scripts/rantListView.js:onDelete()` Loss of function context (this).

## Solution Links

- [Event PreventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [Function Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
