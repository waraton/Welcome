const opposites = {
  1: ["Wise", "Foolish"],
  2: ["Big", "Small"],
  3: ["Hot", "Cold"],
  4: ["Fast", "Slow"],
  5: ["Good", "Bad"],
  6: ["Happy", "Sad"],
  7: ["Open", "Closed"],
  8: ["Hard", "Soft"],
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
let counter = 1;
let getFrom = [];

for (iterator in opposites) {
  for (let i = 0; i < 3; i++) {
    getFrom.push(opposites[Math.floor(Math.random() * 150) + 1][1]);
  }
  getFrom.push(opposites[iterator][0]);
  getFrom.sort();
  const cont = document.createElement("section");
  cont.classList.add(`qn-container`);
  cont.classList.add(`qsn${counter}`);
  cont.innerHTML = `
    <p class="question"><span  class='counter'>${counter}.</span>
      what is the opposite of <span class="word">${opposites[iterator][1]}</span>?
    </p>
    <ol>
    <li>${getFrom[0]}</li>
    <li>${getFrom[1]}</li>
    <li>${getFrom[2]}</li>
    <li>${getFrom[3]}</li>
    </ol>
    <p class='correct'>${opposites[iterator][0]}<span></span></p>
    <div class='buttons'>
      <button class="reveal">Show</button>
    </div>  
    `;
  ++counter;
  getFrom = [];
  document.querySelector("section").append(cont);
}
/** the
 * @param {number} counter The nth opposite object out of the 151
 * @param {number} timeOut The the number of second for the animation
 * @param {Array} getFrom An array of random choices selected from the 151
 */

const qns = document.querySelectorAll("section[class*='qn-container qsn']");
const choices = document.querySelectorAll("ol li");
const revealButtons = document.querySelectorAll(".reveal");
const questions = document.querySelectorAll("section[class^='qsn']");
const timeOut = 5;
counter = 1;
const nextButton = document.querySelector(".next");
const revealer = document.querySelector(".reveal");
let score = 0;

function reveal() {
  revealButtons.forEach((reveal) => {
    reveal.addEventListener("click", (e) => {
      e.defaultPrevented;
      reveal.parentElement.previousElementSibling.classList.add("selected");
      reveal.parentElement.previousElementSibling.lastChild.style.animation = `
    crease ${timeOut}s linear 
    `;
/* hello */
      setTimeout(() => {
        reveal.parentElement.previousElementSibling.lastChild.style.animationPlayState = true;
        reveal.parentElement.previousElementSibling.classList.remove(
          "selected"
        );
      }, timeOut * 1000);
    });
  });
}
hideAllQns();
disNext();

function hideAllQns() {
  qns.forEach((qn) => {
    qn.style.display = "none";
  });
}

function disNext() {
  qns[counter - 1].style.display = "grid";
  nextButton.addEventListener("click", nextQns);
  nextButton.disabled = true;
  revealButtons[counter].disabled = true;
}

function nextQns() {
  hideAllQns();
  qns[counter].style.display = "grid";
  revealButtons[counter].disabled = true;
  nextButton.disabled = true;
  ++counter;
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choice.textContent === opposites[counter][0]
      ? correct(choice)
      : wrong(choice);
  });
});

function correct(a) {
  a.classList.add("correctChoice");
  disableOtherChoices(a);
  score++;
  console.log(score);
}
function wrong(a) {
  a.classList.add("wrong");
  disableOtherChoices(a);
}

function disableOtherChoices(a) {
  nextButton.disabled = false;
  revealButtons[counter - 1].disabled= false
  nextQns()
}


