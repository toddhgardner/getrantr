Exercise 4 - 400 Server Responses
================

# Goal
Identify cause and resolve 400's responses from the server.


# Evidence
- Monitoring reporting large numbers of 400 responses from `POST /api/rants`
- User enters 0 characters into textarea#rant_text
- User clicks submit button


# Concepts
- Chrome Network Inspector and Preview
- Chrome Source debugger and stepping








# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/addRantView.js:onSubmit()` Should check for valid input
- `/src/public/index.html` textarea should have required attribute

## Solution Links

- [Input:Required](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
