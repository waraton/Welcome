const opposites = {
  3: ["Hot", "Cold"],
  7: ["Open", "Closed"],
  2: ["Big", "Small"],
  4: ["Fast", "Slow"],
  5: ["Good", "Bad"],
  6: ["Happy", "Sad"],
  8: ["Hard", "Soft"],
  1: ["Wise", "Foolish"],
  9: ["Clean", "Dirty"],
  10: ["Early", "Late"],
  11: ["Empty", "Full"],
  12: ["Heavy", "Light"],
  13: ["Young", "Old"],
  14: ["Tall", "Short"],
  15: ["Easy", "Difficult"],
  16: ["Beautiful", "Ugly"],
  17: ["Strong", "Weak"],
  18: ["Rich", "Poor"],
  19: ["Alive", "Dead"],
  20: ["Bright", "Dark"],
  21: ["Dry", "Wet"],
  22: ["Noisy", "Quiet"],
  23: ["Sharp", "Dull"],
  24: ["Sweet", "Bitter"],
  25: ["Thick", "Thin"],
  26: ["Wide", "Narrow"],
  27: ["Kind", "Cruel"],
  28: ["Polite", "Rude"],
  29: ["Safe", "Dangerous"],
  30: ["Deep", "Shallow"],
  31: ["Near", "Far"],
  32: ["Right", "Wrong"],
  33: ["Up", "Down"],
  34: ["Inside", "Outside"],
  35: ["Push", "Pull"],
  36: ["Start", "Stop"],
  37: ["Buy", "Sell"],
  38: ["Give", "Take"],
  39: ["Win", "Lose"],
  40: ["Come", "Go"],
  41: ["Arrive", "Depart"],
  42: ["Love", "Hate"],
  43: ["Male", "Female"],
  44: ["Include", "Exclude"],
  45: ["Remember", "Forget"],
  46: ["Laugh", "Cry"],
  47: ["Accept", "Reject"],
  48: ["Truth", "Lie"],
  49: ["Begin", "End"],
  50: ["Allow", "Forbid"],
  51: ["Agree", "Disagree"],
  52: ["Increase", "Decrease"],
  53: ["Build", "Destroy"],
  54: ["Rise", "Fall"],
  55: ["Create", "Ruin"],
  56: ["Gain", "Lose"],
  57: ["Fix", "Break"],
  58: ["Teach", "Learn"],
  59: ["Show", "Hide"],
  60: ["Open-minded", "Narrow-minded"],
  61: ["Generous", "Stingy"],
  62: ["Modern", "Ancient"],
  63: ["Truthful", "Dishonest"],
  64: ["Flexible", "Stiff"],
  65: ["Useful", "Useless"],
  66: ["Friendly", "Hostile"],
  67: ["Honest", "Dishonest"],
  68: ["Hopeful", "Hopeless"],
  69: ["Active", "Lazy"],
  70: ["Brave", "Cowardly"],
  71: ["Tidy", "Messy"],
  72: ["Peaceful", "Violent"],
  73: ["Legal", "Illegal"],
  74: ["Permanent", "Temporary"],
  75: ["Natural", "Artificial"],
  76: ["Visible", "Invisible"],
  77: ["Public", "Private"],
  78: ["Normal", "Strange"],
  79: ["Simple", "Complicated"],
  80: ["Comfortable", "Uncomfortable"],
  81: ["Careful", "Careless"],
  82: ["Silent", "Talkative"],
  83: ["Lucky", "Unlucky"],
  84: ["Interesting", "Boring"],
  85: ["Real", "Fake"],
  86: ["Mature", "Immature"],
  87: ["Responsible", "Irresponsible"],
  88: ["Connected", "Disconnected"],
  89: ["Patient", "Impatient"],
  90: ["Agreeable", "Disagreeable"],
  91: ["Frequent", "Rare"],
  92: ["Permanent", "Temporary"],
  93: ["Respect", "Disrespect"],
  94: ["Present", "Absent"],
  95: ["Neat", "Sloppy"],
  96: ["Positive", "Negative"],
  97: ["Succeed", "Fail"],
  98: ["Acceptable", "Unacceptable"],
  99: ["Correct", "Incorrect"],
  100: ["Encourage", "Discourage"],
  101: ["Visible", "Hidden"],
  102: ["Alive", "Dead"],
  103: ["Amateur", "Professional"],
  104: ["Arrival", "Departure"],
  105: ["Asleep", "Awake"],
  106: ["Attractive", "Repulsive"],
  107: ["Backward", "Forward"],
  108: ["Beginner", "Expert"],
  109: ["Bend", "Straighten"],
  110: ["Bless", "Curse"],
  111: ["Bold", "Timid"],
  112: ["Borrow", "Lend"],
  113: ["Bound", "Free"],
  114: ["Captive", "Free"],
  115: ["Cheerful", "Gloomy"],
  116: ["Clear", "Cloudy"],
  117: ["Combine", "Separate"],
  118: ["Comfort", "Distress"],
  119: ["Connect", "Disconnect"],
  120: ["Cool", "Warm"],
  121: ["Cruelty", "Kindness"],
  122: ["Damage", "Repair"],
  123: ["Danger", "Safety"],
  124: ["Defend", "Attack"],
  125: ["Despair", "Hope"],
  126: ["Destroy", "Build"],
  127: ["Divide", "Unite"],
  128: ["Domestic", "Wild"],
  129: ["Entrance", "Exit"],
  130: ["Expand", "Shrink"],
  131: ["Exterior", "Interior"],
  132: ["Fact", "Fiction"],
  133: ["Famous", "Notorious"],
  134: ["Fat", "Skinny"],
  135: ["Fast", "Last"],
  136: ["Forward", "Backward"],
  137: ["Freedom", "Slavery"],
  138: ["Fresh", "Stale"],
  139: ["Friend", "Enemy"],
  140: ["Future", "Past"],
  141: ["Gain", "Loss"],
  142: ["Gentle", "Harsh"],
  143: ["Giant", "Dwarf"],
  144: ["Give", "Receive"],
  145: ["Growth", "Decline"],
  146: ["Hero", "Villain"],
  147: ["Increase", "Reduce"],
  148: ["Joy", "Sorrow"],
  149: ["Knowledge", "Ignorance"],
  150: ["Lead", "Follow"],
  151: ["Victory", "Defeat"],
};

// ============================================================
// STATE MANAGEMENT - Centralized state tracking
// ============================================================
const appState = {
  currentQuestion: 0,
  totalQuestions: Object.keys(opposites).length,
  answered: false,
  score: [],
  wronged: [],
  skipped: [],
  questionData: [], // Will store question + answer data
  
  reset() {
    this.currentQuestion = 0;
    this.answered = false;
    this.score = [];
    this.wronged = [];
    this.skipped = [];
  },
  
  getCurrentCorrectAnswer() {
    return this.questionData[this.currentQuestion]?.correctAnswer || null;
  },
  
  isAnswered() {
    return this.answered;
  },
  
  markAnswered() {
    this.answered = true;
  },
  
  getProgress() {
    const total = this.score.length + this.wronged.length + this.skipped.length;
    return {
      total,
      correct: this.score.length,
      wrong: this.wronged.length,
      skipped: this.skipped.length
    };
  }
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Converts object to array for easier iteration
 */
function getOppositesList() {
  return Object.values(opposites);
}

/**
 * Gets 3 random incorrect answers (distractors)
 * Ensures they are unique and different from the correct answer
 */
function getRandomDistracters(correctAnswer, count = 3) {
  const oppositesList = getOppositesList();
  const selected = new Set();
  const result = [];
  
  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * oppositesList.length);
    const distracter = oppositesList[randomIndex][1]; // Get the opposite/second word
    
    // Ensure it's not the correct answer and not already selected
    if (distracter !== correctAnswer && !selected.has(distracter)) {
      result.push(distracter);
      selected.add(distracter);
    }
  }
  
  return result;
}

/**
 * Shuffles an array (Fisher-Yates shuffle)
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ============================================================
// QUESTION GENERATION
// ============================================================

/**
 * Generates all quiz questions with shuffled answer options
 */
function generateQuestions() {
  const oppositesList = getOppositesList();
  let counter = 1;
  
  oppositesList.forEach((pair) => {
    const questionWord = pair[1]; // What we ask about
    const correctAnswer = pair[0]; // The correct opposite
    
    // Get 3 random distractors
    const distracters = getRandomDistracters(correctAnswer);
    
    // Combine and shuffle all options
    const allOptions = shuffleArray([correctAnswer, ...distracters]);
    
    appState.questionData.push({
      number: counter,
      question: questionWord,
      correctAnswer: correctAnswer,
      options: allOptions
    });
    
    counter++;
  });
}

/**
 * Creates and renders a single question
 */
function renderQuestion(index) {
  const mainSection = document.querySelector("main > section");
  
  // Remove existing question containers
  const existingContainers = mainSection.querySelectorAll(".qn-container");
  existingContainers.forEach(container => container.remove());
  
  // Get question data
  const data = appState.questionData[index];
  
  // Create question container
  const cont = document.createElement("section");
  cont.classList.add("qn-container");
  cont.classList.add(`qsn${data.number}`);
  
  // Build HTML
  cont.innerHTML = `
    <p class="question">
      <span class="counter">${data.number}.</span>
      What is the opposite of 
      <span class="word">${data.question}</span>?
    </p>
    <ol>
      ${data.options.map((option, i) => `<li data-answer="${option}">${option}</li>`).join('')}
    </ol>
  `;
  
  // Insert at the beginning (before scoreboard)
  mainSection.insertBefore(cont, mainSection.querySelector("[scoreBoard]"));
  
  // Attach event listeners to choices
  attachChoiceListeners();
}

// ============================================================
// EVENT HANDLERS
// ============================================================

/**
 * Attaches click listeners to answer choices for the current question
 */
function attachChoiceListeners() {
  const currentContainer = document.querySelector(".qn-container");
  if (!currentContainer) return;
  
  const choices = currentContainer.querySelectorAll("ol li");
  
  choices.forEach((choice) => {
    // Remove existing listeners by cloning
    const newChoice = choice.cloneNode(true);
    choice.parentNode.replaceChild(newChoice, choice);
    
    // Add new listener
    newChoice.addEventListener("click", () => {
      if (appState.isAnswered()) return; // Prevent multiple answers
      
      const selectedAnswer = newChoice.dataset.answer;
      const correctAnswer = appState.getCurrentCorrectAnswer();
      
      if (selectedAnswer === correctAnswer) {
        handleCorrectAnswer(newChoice);
      } else {
        handleWrongAnswer(newChoice, correctAnswer);
      }
    });
  });
}

/**
 * Handles correct answer selection
 */
function handleCorrectAnswer(choiceElement) {
  appState.markAnswered();
  appState.score.push(appState.getCurrentCorrectAnswer());
  
  // Visual feedback
  choiceElement.classList.add("correctChoice");
  disableAllChoices();
  
  // Update UI
  updateScoreBoard();
  
  // Move to next question
  setTimeout(() => {
    moveToNextQuestion();
  }, 1500);
}

/**
 * Handles wrong answer selection
 */
function handleWrongAnswer(choiceElement, correctAnswer) {
  appState.markAnswered();
  appState.wronged.push(choiceElement.dataset.answer);
  
  // Visual feedback - show wrong choice and highlight correct answer
  choiceElement.classList.add("wrong");
  
  // Highlight the correct answer
  const currentContainer = document.querySelector(".qn-container");
  const allChoices = currentContainer.querySelectorAll("ol li");
  allChoices.forEach((choice) => {
    if (choice.dataset.answer === correctAnswer) {
      choice.classList.add("correctChoice", "showCorrect");
    }
  });
  
  disableAllChoices();
  
  // Update UI
  updateScoreBoard();
  
  // Move to next question
  setTimeout(() => {
    moveToNextQuestion();
  }, 1500);
}

/**
 * Disables all choice buttons after an answer is selected
 */
function disableAllChoices() {
  const choices = document.querySelectorAll(".qn-container ol li");
  choices.forEach(choice => {
    choice.style.pointerEvents = "none";
    choice.style.opacity = "0.6";
  });
}

/**
 * Handles the "Skip" button click
 */
function handleSkipQuestion() {
  if (appState.isAnswered()) return;
  
  const currentData = appState.questionData[appState.currentQuestion];
  appState.skipped.push(currentData.question);
  appState.markAnswered();
  
  updateScoreBoard();
  
  setTimeout(() => {
    moveToNextQuestion();
  }, 500);
}

/**
 * Moves to the next question or ends quiz
 */
function moveToNextQuestion() {
  appState.currentQuestion++;
  
  if (appState.currentQuestion >= appState.totalQuestions) {
    endQuiz();
  } else {
    appState.answered = false;
    renderQuestion(appState.currentQuestion);
  }
}

/**
 * Updates the scoreboard with current progress
 */
function updateScoreBoard() {
  const progress = appState.getProgress();
  
  document.querySelector('[next]').textContent = progress.skipped;
  document.querySelector('[corr]').textContent = progress.correct;
  document.querySelector('[wrong]').textContent = progress.wrong;
  
  // Update pie chart
  updateChart(progress);
}

/**
 * Updates the conic gradient pie chart
 */
function updateChart(progress) {
  const { total, skipped, correct, wrong } = progress;
  
  if (total === 0) {
    document.querySelector('.dataRep').style.background = 'white';
    return;
  }
  
  const skippedPercent = (skipped / total) * 100;
  const correctPercent = ((skipped + correct) / total) * 100;
  const wrongPercent = ((skipped + correct + wrong) / total) * 100;
  
  document.querySelector('.dataRep').style.background = `
    conic-gradient(
      green 0% ${skippedPercent}%,
      blue ${skippedPercent}% ${correctPercent}%,
      red ${correctPercent}% ${wrongPercent}%,
      white ${wrongPercent}% 100%
    )
  `;
}

/**
 * Ends the quiz and shows final results
 */
function endQuiz() {
  const mainSection = document.querySelector("main > section");
  const container = mainSection.querySelector(".qn-container");
  
  if (container) {
    container.style.display = "none";
  }
  
  const progress = appState.getProgress();
  const accuracy = progress.total > 0 
    ? Math.round((progress.correct / progress.total) * 100) 
    : 0;
  
  // Show end screen (you can enhance this)
  alert(`
Quiz Complete!

Correct: ${progress.correct}
Wrong: ${progress.wrong}
Skipped: ${progress.skipped}
Total: ${progress.total}

Accuracy: ${accuracy}%
  `);
  
  // Optional: Reset button
  const nextButton = document.querySelector(".next");
  nextButton.textContent = "Restart";
  nextButton.onclick = () => {
    appState.reset();
    appState.questionData = [];
    generateQuestions();
    appState.answered = false;
    renderQuestion(0);
    nextButton.textContent = "Skip";
    nextButton.onclick = null;
    updateScoreBoard();
  };
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Generate all questions
  generateQuestions();
  
  // Render first question
  renderQuestion(0);
  
  // Setup Next/Skip button
  const nextButton = document.querySelector(".next");
  nextButton.textContent = "Skip";
  nextButton.addEventListener("click", handleSkipQuestion);
  
  // Setup Show/Hide Score button
  document.querySelector('[scoreBoard] button').addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('active');
    const isActive = e.target.parentElement.classList.contains('active');
    e.target.textContent = isActive ? 'Hide Score' : 'Show Score';
  });
  
  // Initialize scoreboard
  updateScoreBoard();
});
