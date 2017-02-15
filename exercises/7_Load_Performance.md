Exercise 7 - Load Performance
================

# Goal
Locate the sources with the biggest impact on load performance


# Evidence
- Users report the site is slow to load.


# Concepts
- [Chrome Network Throttle](https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions)
- [Chrome Timeline](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool)
- Timeline with Network, Screenshots, and Memory checked





# Spoilers (Try Yourself First)

## Key Files

- `/src/public/index.html` Loads lots of scripts independently
- `/src/public/images/*` Are way to big for what they need to be

## Solution Links

- [Tracking Real World Performance](https://vimeo.com/113715672)
