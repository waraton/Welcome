const opposites = {
  Big: "Small",
  Hot: "Cold",
  Fast: "Slow",
  Good: "Bad",
  Happy: "Sad",
  Open: "Closed",
  Hard: "Soft",
  Clean: "Dirty",
  Early: "Late",
  Empty: "Full",
  Heavy: "Light",
  Young: "Old",
  Tall: "Short",
  Easy: "Difficult",
  Beautiful: "Ugly",
  Strong: "Weak",
  Rich: "Poor",
  Alive: "Dead",
  Bright: "Dark",
  Dry: "Wet",
  Noisy: "Quiet",
  Sharp: "Dull",
  Sweet: "Bitter",
  Thick: "Thin",
  Wide: "Narrow",
  Kind: "Cruel",
  Polite: "Rude",
  Safe: "Dangerous",
  Deep: "Shallow",
  Near: "Far",
  Right: "Wrong",
  Up: "Down",
  Inside: "Outside",
  Push: "Pull",
  Start: "Stop",
  Buy: "Sell",
  Give: "Take",
  Win: "Lose",
  Come: "Go",
  Arrive: "Depart",
  Love: "Hate",
  Male: "Female",
  Include: "Exclude",
  Remember: "Forget",
  Laugh: "Cry",
  Accept: "Reject",
  Truth: "Lie",
  Begin: "End",
  Allow: "Forbid",
  Agree: "Disagree",
  Increase: "Decrease",
  Build: "Destroy",
  Rise: "Fall",
  Create: "Ruin",
  Gain: "Lose",
  Fix: "Break",
  Teach: "Learn",
  Show: "Hide",
  "Open-minded": "Narrow-minded",
  Generous: "Stingy",
  Modern: "Ancient",
  Truthful: "Dishonest",
  Flexible: "Stiff",
  Useful: "Useless",
  Friendly: "Hostile",
  Honest: "Dishonest",
  Hopeful: "Hopeless",
  Active: "Lazy",
  Brave: "Cowardly",
  Tidy: "Messy",
  Peaceful: "Violent",
  Legal: "Illegal",
  Permanent: "Temporary",
  Natural: "Artificial",
  Visible: "Invisible",
  Public: "Private",
  Normal: "Strange",
  Simple: "Complicated",
  Comfortable: "Uncomfortable",
  Careful: "Careless",
  Silent: "Talkative",
  Lucky: "Unlucky",
  Interesting: "Boring",
  Real: "Fake",
  Mature: "Immature",
  Responsible: "Irresponsible",
  Connected: "Disconnected",
  Patient: "Impatient",
  Agreeable: "Disagreeable",
  Frequent: "Rare",
  Permanent: "Temporary",
  Respect: "Disrespect",
  Present: "Absent",
  Neat: "Sloppy",
  Positive: "Negative",
  Succeed: "Fail",
  Acceptable: "Unacceptable",
  Correct: "Incorrect",
  Encourage: "Discourage",
  Visible: "Hidden",
  Alive: "Dead",
  Amateur: "Professional",
  Arrival: "Departure",
  Asleep: "Awake",
  Attractive: "Repulsive",
  Backward: "Forward",
  Beginner: "Expert",
  Bend: "Straighten",
  Bless: "Curse",
  Bold: "Timid",
  Borrow: "Lend",
  Bound: "Free",
  Captive: "Free",
  Cheerful: "Gloomy",
  Clear: "Cloudy",
  Combine: "Separate",
  Comfort: "Distress",
  Connect: "Disconnect",
  Cool: "Warm",
  Cruelty: "Kindness",
  Damage: "Repair",
  Danger: "Safety",
  Defend: "Attack",
  Despair: "Hope",
  Destroy: "Build",
  Divide: "Unite",
  Domestic: "Wild",
  Entrance: "Exit",
  Expand: "Shrink",
  Exterior: "Interior",
  Fact: "Fiction",
  Famous: "Unknown",
  Fat: "Skinny",
  Feast: "Fast",
  Forward: "Backward",
  Freedom: "Slavery",
  Fresh: "Stale",
  Friend: "Enemy",
  Future: "Past",
  Gain: "Loss",
  Gentle: "Harsh",
  Giant: "Dwarf",
  Give: "Receive",
  Growth: "Decline",
  Hero: "Villain",
  Increase: "Reduce",
  Joy: "Sorrow",
  Knowledge: "Ignorance",
  Lead: "Follow",
  Victory: "Defeat",
};
let counter = 0;
for (iterator in opposites) {
  const cont = document.createElement("section");
  cont.classList.add(`qn-container`);
  cont.classList.add(`qsn${counter}`);
  cont.innerHTML = `
    <p class="question"><span class='counter'>${counter}.</span>
      what is the opposite of <span class="word">${iterator}</span>?
    </p>
    <p class='correct'>${opposites[iterator]}<span></span></p>
    <div class='buttons'>
      <button class="reveal">Show</button>
      <button class="next">Next</button>
    </div>  
    `;
  document.body.appendChild(cont);
  counter++;
}

const qns = document.querySelectorAll("section[class*='qn-container qsn']");
const revealButtons = document.querySelectorAll(".reveal");
const questions = document.querySelectorAll("section[class^='qsn']");
const timeOut = 5;

revealButtons.forEach((reveal) => {
  reveal.addEventListener("click", (e) => {
    e.defaultPrevented;
    reveal.parentElement.previousElementSibling.classList.add("selected");
    reveal.parentElement.previousElementSibling.lastChild.style.animation = `
    crease ${timeOut}s linear 
    `;
    setTimeout(() => {
      reveal.parentElement.previousElementSibling.lastChild.style.animationPlayState = true;
      reveal.parentElement.previousElementSibling.classList.remove("selected");
    }, timeOut * 1000);
  });
});
let count = 1;
qns.forEach((qn) => {
  qn.style.display = "none";
});
qns[count].style.display = "grid";

