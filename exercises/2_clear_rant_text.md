Exercise 2 - Clear Rant Text
================

# Goal
Page should clear draft rant text when cleared.


# Evidence
- User enters some text into the rant box.
- User select-all, and deletes the text
- User reloads the page, see original text in the rant box.


# Concepts
- Chrome DOM Event Listeners
- Chrome Application Storage
- Chrome Source debugger and stepping








# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/addRantView.js:onChange()` Empty text value will be falsy

```
onChange: function(evt) {
  var text = (evt.target || {}).value;
  if (typeof text === 'string') { // <-- Change this to check for string
    localStorage.setItem('next-rant', text);
  }
},
```

## Solution Links

- [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
