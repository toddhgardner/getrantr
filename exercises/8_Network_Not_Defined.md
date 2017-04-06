Exercise 8 - Network is Not Defined
================

# Goal
Notify monitoring and user in case of major dependency failure.


# Evidence
- analytics and $ (jQuery) will sometimes not be defined based on monitoring
- Comment out the jQuery script, how does the UI appear
- Prove by simulating flaky networks with Charles or Fiddler


# Concepts
- [Progressive Enhancement](http://alistapart.com/article/understandingprogressiveenhancement)
- Failure fallbacks









# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/index.js` Main listener. Check for existence and show warning.

```
if (!$) {
  console.error('Failed to load jQuery dependency.');
  document.body.innerHTML = '<h1>Sorry! An error occurred loading the application. Please try again.</h1>';
}
```

## Solution Links
