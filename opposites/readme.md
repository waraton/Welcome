# Opposites Quiz

A interactive quiz application that tests users on their knowledge of opposite words. Built with vanilla HTML, CSS, and JavaScript.

## Project Overview

This project presents an object literal containing 151 word pairs with their opposites, displayed as a multiple-choice quiz. Users select the correct opposite word from four options, with real-time score tracking and visual feedback.

## Features Implemented ✅

### Core Quiz Functionality
- **151 Word Pairs** - Comprehensive database of opposite words with multiple-choice options
- **Answer Shuffling** - Random shuffling of answer options using Fisher-Yates algorithm
- **Duplicate Prevention** - Ensures distractors are unique and valid (no answer repeats)
- **Question Navigation** - Skip functionality to move through questions seamlessly

### User Feedback & Visual Indicators
- **Instant Visual Feedback** - Color-coded responses:
  - ✅ Green highlight for correct answers
  - ❌ Red highlight for wrong answers
  - Shows correct answer when user selects wrong option
- **Disabled Choices** - Prevents multiple answers per question
- **Progress Bar** - Conic gradient pie chart showing:
  - Green: Skipped questions
  - Blue: Correct answers
  - Red: Wrong answers

### Score Tracking
- **Live Scoreboard** - Real-time updates showing:
  - Number of correct answers
  - Number of wrong answers
  - Number of skipped questions
- **Collapsible Score Panel** - Show/Hide button to toggle visibility
- **Final Results** - Quiz completion summary with accuracy percentage
- **Restart Functionality** - Reset and retake the quiz

## Code Architecture

### State Management
- **Centralized `appState` Object** - Manages all quiz state:
  - Current question tracking
  - Score arrays (correct, wrong, skipped)
  - Question data storage
  - Progress helper methods

### Key Functions

**Question Generation**
- `generateQuestions()` - Pre-generates all 151 quiz questions with shuffled options
- `getRandomDistracters()` - Selects 3 unique random incorrect answers
- `shuffleArray()` - Fisher-Yates shuffle for option randomization

**Rendering & Events**
- `renderQuestion()` - Displays current question with fresh HTML
- `attachChoiceListeners()` - Attaches event listeners per question (prevents scope issues)
- `handleCorrectAnswer()` - Processes correct selection
- `handleWrongAnswer()` - Shows wrong answer + highlights correct answer

**UI Updates**
- `updateScoreBoard()` - Updates counters and progress
- `updateChart()` - Refreshes pie chart visualization
- `moveToNextQuestion()` - Question navigation
- `endQuiz()` - Quiz completion handling

## Bug Fixes (Latest Refactor)

### Fixed Issues
1. ✅ **Random Answer Selection** - Fixed index math preventing duplicates
2. ✅ **Event Listener Scope** - Fresh listeners attached per question instead of global
3. ✅ **Missing Answer Feedback** - Shows correct answer when user is wrong
4. ✅ **Multiple Answer Prevention** - Disabled choices after first selection
5. ✅ **CSS Selector Issues** - Proper data attributes instead of complex class selectors
6. ✅ **Chart Calculation** - Fixed pie chart gradient percentages

### Code Quality Improvements
- Organized code into logical sections with clear comments
- Added JSDoc documentation for functions
- Separated concerns (state, generation, rendering, events)
- Removed unused functions (`viewer()`, dead code)
- Better variable naming and clarity

## Technology Stack

- **HTML5** - Semantic markup with data attributes
- **CSS3** - Grid layout, conic gradients, transitions
- **Vanilla JavaScript (ES6)** - No dependencies
  - Object-oriented state management
  - Functional helper functions
  - Event delegation patterns

## How to Use

1. Open `index.html` in a web browser
2. Read the opposite word displayed
3. Click on one of four answer options
4. Receive instant visual feedback (green = correct, red = wrong)
5. View the correct answer if you were incorrect
6. Click "Skip" to move to next question without answering
7. Track your progress in the score panel
8. Complete all 151 questions to see final accuracy score
9. Click "Restart" to retake the quiz

## Future Enhancements

- [ ] **Difficulty Levels** - Filter words by complexity
- [ ] **Timed Mode** - Add countdown timer for speed challenges
- [ ] **Category Filter** - Group opposites by type (adjectives, verbs, etc.)
- [ ] **Leaderboard** - Track high scores across sessions
- [ ] **Custom Word Sets** - Allow users to upload their own word pairs
- [ ] **Mobile Optimization** - Improved responsive design for touch devices
- [ ] **Sound Effects** - Audio feedback for correct/wrong answers
- [ ] **Dark Mode** - Theme switcher option

## File Structure

```
opposites/
├── index.html      - Main HTML structure
├── style.css       - Styling and layout (Grid, conic-gradient)
├── app.js          - Application logic (refactored)
└── readme.md       - This file
```

## Recent Updates (August 2026)

**Major Refactoring** - Complete code restructure for better maintainability:
- Implemented centralized state management system
- Rewrote question generation with proper validation
- Fixed critical bugs in answer selection and event handling
- Enhanced visual feedback with dual answer display
- Added comprehensive code documentation

---

**Last Updated:** August 9, 2026
