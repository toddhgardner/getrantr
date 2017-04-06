Exercise 6 - Load Performance
================

# Goal
Locate 3 sources with impact on load performance


# Evidence
- Users report the site is slow to load.
- Simulate with Network Throttle: Chrome > Network > Throttle > Good 3G
- Run Timeline: Network, Screenshots, Memory


# Concepts
- [Chrome Network Throttle](https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions)
- [Chrome Timeline](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool)
- Timeline with Network, Screenshots, and Memory checked








# Spoilers (Try Yourself First)

## Key Indicators

- `/src/public/index.html` Blocks for fonts from Google API
- `/src/public/index.html` Loads lots of scripts independently
- `/src/public/scripts/*` Are not compressed or cached
- `/src/public/images/*` Are way to big for what they need to be

## Solution Links

- [Tracking Real World Performance](https://vimeo.com/113715672)
