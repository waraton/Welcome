const items = document.querySelectorAll(
  "section:first-of-type table:first-of-type td:not(:EMPTY)"
);
setInterval(dater, 1500);
const lectureTr = document.querySelectorAll(".lecturers table tr");
const days = document.querySelectorAll("table:first-of-type thead tr th");
const times = document.querySelectorAll(
  "table:first-of-type tbody tr th:first-of-type"
);

function rmBlack() {
  items.forEach((i) => {
    i.classList.remove("black");
  });
  lectureTr.forEach((t) => {
    t.classList.remove("black");
  });
  days.forEach((dayN) => {
    dayN.classList.remove("black");
  });
  times.forEach((hor) => {
    hor.classList.remove("black");
  });
}

function dater() {
  document.body
    .querySelectorAll("*")
    .forEach((tem) => tem.classList.remove("black"));
  const nowDate = new Date();

  items.forEach((i) => {
    [day, start, end] = i.dataset.value.split(" ");
    if (
      (nowDate.getHours() >= start) &
      (nowDate.getHours() <= end) &
      (nowDate
        .toLocaleString("en", {
          weekday: "short",
        })
        .toLowerCase() ===
        day)
    ) {
      rmBlack();
      i.classList.add("black");
      lectureTr.forEach((tr) => {
        if (
          tr.textContent
            .toLocaleLowerCase()
            .indexOf(i.textContent.toLocaleLowerCase()) !== -1
        ) {
          tr.lastElementChild.classList.add("black");
        }
        if (tr.classList.contains("eeLabs") & i.classList.contains("eeLabs")) {
          tr.classList.add("black");
        }
      });
    }

    days.forEach((dayN) => {
      if (
        dayN.textContent.toLocaleLowerCase() ===
        new Date().toLocaleString("en", { weekday: "long" }).toLowerCase()
      ) {
        dayN.classList.add("black");
      }
    });

    if (
      (nowDate.getHours() >= start) &
      (nowDate.getHours() < end) &
      (day === "everyday")
    ) {
      rmBlack();
      i.classList.add("black");
    }
  });

  times.forEach((tm) => {
    if (
      nowDate.getHours() === +tm.textContent.slice(0, 2) &&
      nowDate.getHours() < Number(tm.textContent.slice(5, 7))
    ) {
      tm.classList.add("black");
    }
  });
}
const emt = document.querySelectorAll("td:empty");
emt.forEach((e) => {
  setInterval(() => {
    let r = Math.random();
    e.style.backgroundSize = `${0.5 + r}rem ${0.5 + r}rem`;
  }, 25525);
});

const date = document.getElementById("date");
const time = document.getElementById("time");
const tag = document.getElementById("tag");
const notes = document.getElementById("notes");
const add = document.getElementById("add");

add.addEventListener(`click`, (e) => {
  e.preventDefault();
  const nowId = new Date();
  const store = [
    nowId.toLocaleDateString(),
    time.value,
    tag.value,
    notes.value,
  ];
  let state = store.filter((w) => w.length === 0).length === 0;
  if (state) {
    localStorage.setItem(nowId.toISOString(), JSON.stringify(store));
    loadLocal();
  }
});

function loadLocal() {
  for (const key in localStorage) {
    if (
      Object.hasOwnProperty.call(localStorage, key) &&
      !document.getElementById(key)
    ) {
      const element = JSON.parse(localStorage[key]);
      [a, b, c, d] = element;
      document.querySelector(`.dis`).innerHTML += `
      <li>
      <span>${a}</span>
      <span>${b}</span>
      <span>${c}</span>
      <span>${d}</span>
      <span del id=${key}>x</span>
      </li>
      `;
    }
  }
}
loadLocal();

document.querySelectorAll("[del]").forEach((del) => {
  del.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem(e.target.id);
    e.target.parentElement.style.display = "none";
  });
});

const buttons = document.querySelectorAll(`nav button`);
const tabs = document.querySelectorAll(`section.tab`);
function removeCurrent() {
  tabs.forEach((tab) => {
    tab.classList.remove("current");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}

buttons.forEach((button) => {
  button.addEventListener(`click`, (e) => {
    removeCurrent();
    let actTab = button.textContent;
    tabs.forEach((tab) => {
      if (tab.classList.contains(actTab)) {
        tab.classList.add("current");
      }
    });
    e.target.classList.add(`active`);
  });
});

const classes = ["bad", "tried", "good", "excellent"];

document
  .querySelectorAll(".grading table:first-of-type tbody tr td:last-child")
  .forEach((grade) => {
    if (grade.textContent < 2.8) grade.classList.add(classes[0]);
    if (grade.textContent < 3.6) grade.classList.add(classes[1]);
    if (grade.textContent < 4.4) grade.classList.add(classes[2]);
    if (grade.textContent <= 5) grade.classList.add(classes[3]);
  });
classes.forEach((grad) => {
  document
    .querySelectorAll(`.grading table:first-of-type tbody tr:has(.${grad}) td`)
    .forEach((grade) => {
      grade.classList.add(grad);
      grade.style.border = "1px dotted white";
      grade.style.color = "white";
    });
});
document
  .querySelectorAll(`.grading table:last-of-type tbody tr`)
  .forEach((v, i, arr) => {
    classes.forEach((clr, ind, ar) => {
      arr[i].querySelectorAll("td").forEach((element) => {
        element.classList.add(ar[arr.length - 1 - i]);
        element.style.color = "white";
        element.style.border = "1px dotted white";
      });
    });
  });
