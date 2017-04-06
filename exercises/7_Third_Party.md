Exercise 7 - Third Party
================

# Goal
Why did we get "form.submit is not a function" suddenly?


# Evidence
- (Remember to remove the previous network throttle)
- Signup form on `http://www.getrantr.com:9000/signup.html` is broken.
- Code from remove vendor script breaking form submit.
- Fix issue *WITHOUT* changing anything in vendor/analytics.js


# Concepts
- Third party scripts.








# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/analytics.js:submit listener()` Expects form.submit to always be a function, which is not the case if there is an input with name=submit. Change the form on `signup.html` to not have such an input.

```
<div class="signup-action text-center">
  <button type="submit" name="anything_but_submit" class="btn btn-lg btn-orange">Start My Free Trial</button>
</div>
```

## Solution Links

- [When Form.submit is not a Function](https://trackjs.com/blog/when-form-submit-is-not-a-function/)
