# VIIT JEE

## Current State
The app shows a syllabus dialog for each subject (Physics, Chemistry, Mathematics) with a list of chapters. Chapters are displayed as simple cards with a number and checkmark.

## Requested Changes (Diff)

### Add
- Theory points data for every chapter in all three subjects (MPC)
- Expandable/collapsible chapter cards in the syllabus dialog that show key theory points when clicked

### Modify
- Syllabus dialog chapter cards: make them clickable to expand and show theory bullet points

### Remove
- Nothing removed

## Implementation Plan
1. Add a `theoryPoints` data structure mapping each subject -> chapter -> string[] of bullet points
2. Add local state to track which chapter is expanded in the dialog
3. Update the chapter card UI to show an expand/collapse chevron and render theory points when expanded
