import { Tunyar,Lifeline } from "./timelines/tunyar.js";
import { OurGodIsGood } from "./timelines/GodIsGood.js";

const gradientNames = ["conic", "radial", "linear"];
const textArea = document.querySelector("figcaption");
const selectedAudio = document.querySelector("select#audio");
const audio = document.querySelector("audio");

const audioSources = {
  tunyar: ["audios/Tunyar_By_Hardlife_Avenue_Stars_Ft_Suke_Sukari.mp3", Tunyar],
  ourGodIsGood: ["audios/Our-God-Is-Good.mp3", OurGodIsGood],
  lifeline:["audios/lifeline-Mandisa.mp3",Lifeline],
};

let lyricInterval;
let visualInterval;

selectedAudio.addEventListener("change", () => {
  const choice = selectedAudio.value;
  if (!choice) return;

  // 1. Cleanup previous state
  clearInterval(lyricInterval);
  clearInterval(visualInterval);
  textArea.innerHTML = "Loading...";

  // 2. Set Audio Source
  const [src, timeline] = audioSources[choice];
  audio.src = src;
  audio.controls = true;

  // 3. Process Timeline (Once per load)
  const processedTimeline = prepareTimeline(timeline);

  // 4. Start Engine
  startEngine(processedTimeline);
});

function prepareTimeline(timeline) {
  // Map to a new array to avoid mutating the original export multiple times
  return timeline.map((sample) => {
    let timeInSeconds = 0;

    if (typeof sample[0] === 'string') {
      const parts = sample[0].split(":");
      // Handles MM:SS or MM:SS:ms formats
      const minutes = parseFloat(parts[0]) || 0;
      const seconds = parseFloat(parts[1]) || 0;
      timeInSeconds = (minutes * 60) + seconds;
    } else {
      timeInSeconds = sample[0];
    }

    return {
      time: timeInSeconds,
      text: sample[1]
    };
  }).sort((a, b) => a.time - b.time);
}

function startEngine(timeline) {
  // Lyric Loop: Higher frequency (100ms) for smoother syncing
  lyricInterval = setInterval(() => {
    if (!audio.paused && !audio.seeking) {
      const now = audio.currentTime;

      // Find the last lyric whose time is less than current audio time
      const activeLyric = timeline.findLast(item => item.time <= now);

      if (activeLyric && textArea.innerHTML !== activeLyric.text) {
        textArea.innerHTML = activeLyric.text;
      }
    }
  }, 50);

  // Visual Effect Loop (Keep at 2500ms as per your design)
  visualInterval = setInterval(() => {
    if (!audio.paused && !audio.seeking) {
      const progress = (audio.currentTime / audio.duration) * 5 || 0;
      const type = gradientNames[Math.floor(Math.random() * 3)];

      textArea.style.background = `repeating-${type}-gradient(
        #00800080 0%,
        #ffffff80,
        #00000080,
        #ffffff80,
        #ff000080,
        #00800080 ${progress}%) center/25% 25%`;
    } else {
      textArea.style.background = `linear-gradient(blue, orange)`;
    }
  }, 2500);
}