Exercise 6 - Memory Leak
================

# Goal
Locate the source of the largest uncollected memory allocations in getRANTR


# Evidence
- Users report slowing performance
- Conduct a memory profile (for at least 30 seconds)


# Concepts
- [Chrome Allocation Snapshots](https://developers.google.com/web/tools/chrome-devtools/memory-problems/allocation-profiler)
- [Chrome Timeline](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool)
- Timeline with JS Profile and Memory checked






# Spoilers (Try Yourself First)

## Key Files

- `/src/public/scripts/adListView.js:render()` Clears container node without destroying children.

## Solution Links

- [Chrome Memory Debugging](https://developers.google.com/web/tools/chrome-devtools/memory-problems/)
