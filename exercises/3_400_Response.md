Exercise 3 - 400 Server Responses
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

```
onSubmit: function(evt) {
  evt.preventDefault();
  var form = evt.target;
  var rant = {
    text: form.rant.value
  };

  if (rant.text && rant.text.length > 0) { // <-- add this validation check
    analytics.trackConversion();
    this.collection.create(rant, { wait: true });

    form.rant.value = '';
  }
}
```

- `/src/public/index.html` textarea should have required attribute

```
<form target="/api/rant" method="post" ignore>
  <label for="rant_text">What has you on a soapbox today?</label>
  <!-- added required attribute -->
  <textarea id="rant_text" name="rant" placeholder="Well, actually..." required=""></textarea>
  <div class="controls pull-right">
    <button type="submit">Rant</button>
  </div>
</form>
```

## Solution Links

- [Input:Required](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
