Exercise 1 - Fix `Script Error`
================

# Goal
Understand and prevent client-side monitoring from obfuscating errors as `Script Error`


# Evidence
- Production errors are only being reported as `Script Error`


# Concepts
- [Chrome Workspaces](https://developers.google.com/web/tools/setup/setup-workflow)
- Chrome Network Inspector
- Chrome Sources Debugger
- [window.onerror](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)
- [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)






# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/index.js` Try a custom `window.onerror` handler. Fix stray character.
- `/src/public/index.html` Attach `crossorigin` attribute to script tags
- `/src/index.js` Uncomment and send Cross-origin headers from Server

## Solution Links

- [Script Error](https://trackjs.com/blog/script-error-javascript-forensics/)
- [Crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes)
- [HTTP CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
