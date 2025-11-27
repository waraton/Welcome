import { Tunyar } from "./timelines/tunyar.js";
import { OurGodIsGood } from "./timelines/GodIsGood.js";
const textArea = document.querySelector("figcaption");
let row = [];

const audioSources = {
  Tunyar: ["audios/Tunyar_By_Hardlife_Avenue_Stars_Ft_Suke_Sukari.mp3", Tunyar],
  OurGodIsGood: ["audios/Our-God-Is-Good.mp3", OurGodIsGood],
};
const selectedAudio = document.querySelector("select#audio");
const audio = document.querySelector(`audio`);

selectedAudio.addEventListener("change", () => {
  if (selectedAudio.value) {
    row.length = 0
    console.log(row);
    audio.src = audioSources[selectedAudio.value][0];
    lyrics(selectedAudio.value);
  }
});

function timer(file) {
  return Math.floor(file.currentTime);
}

function sel(lyr, are) {
  let time = timer(audio);
  lyr.forEach((rowed) => {
    if (rowed[1] < time) {
      row[0] = rowed;
    }
  });
  row.forEach((a, b, c) => {
    are.innerHTML = c[c.length - 1][2];
  });
}

function lyrics(timeline) {
  const usedTimeline = audioSources[timeline][1];

  usedTimeline.forEach((sam, ind, ary) => {
    sam[0]
      .split(":")
      .forEach((tm, indeed, ar) => (sam[0] = +ar[0] * 60 + +ar[1]));
    sam.unshift(ind);
  });

  let grad = ["conic", "radial", `linear`];
  setInterval(() => {
    if (!audio.paused && !audio.ended && !audio.seeking) {
      sel(usedTimeline, textArea);
      let len = timer(audio);
      textArea.style.background = `repeating-${
        grad[Math.floor(Math.random() * 3)]
      }-gradient(
        #00800080 0%,
        #ffffff80,
        #00000080,
        #ffffff80,
        #ff000080,
        #00800080 ${(len / audio.duration) * 25}%) center/5% 5%`;
    } else textArea.style.background = `linear-gradient(blue,orange)`;
  }, 500);
}
