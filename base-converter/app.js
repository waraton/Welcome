const inputs1 = document.querySelectorAll("#convertDecToBaseN input");
const output1 = document.querySelector("#convertDecToBaseN output");
const submit1 = document.querySelector(`#convertDecToBaseN button`);

const inputs2 = document.querySelectorAll("#convertToDec input");
const output2 = document.querySelector("#convertToDec output");
const submit2 = document.querySelector(`#convertToDec button`);

const inputs3 = document.querySelectorAll("#convertBases input");
const output3 = document.querySelector("#convertBases output");
const submit3 = document.querySelector(`#convertBases button`);

submit1.addEventListener("click", () => {
  if (inputs1[1].value && inputs1[0].value && inputs1[0].value < 23) {
    const BASE = Number(inputs1[0].value);
    const NUMBER = Number(inputs1[1].value);
    const output = convertDecToBaseN(BASE, NUMBER);
    output1.innerHTML = output
  } else output1.innerHTML = `<span error>Enter base and number</span>`;
});

submit2.addEventListener("click", () => {
  if (inputs2[1].value && inputs2[0].value && inputs2[0].value < 23) {
    const BASE = Number(inputs2[0].value);
    const NUMBER = Number(inputs2[1].value);
    const output = convertToDec(BASE, NUMBER);
    output2.innerHTML = output
  } else output2.innerHTML = `<span error>Enter base and number</span>`;
});

// Functions
function convertDecToBaseN(base, num) {
  let result = [];
  let holder = num;
  const chars = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
    16: "G",
    17: "H",
    18: "I",
    19: "J",
    20: "K",
    21: "L",
    22: "M",
  };
  while (holder != 0) {
    let r = holder % base;
    if (r >= 10) r = chars[r];
    else;
    result.push(r);
    holder = Math.floor(holder / base);
  }
  return result.reverse().join("");
}

function convertToDec(inBase, inNum) {
  let inputArray = String(inNum).split("");
  let outNumber = 0;
  const outArray = [];
  let check;
  inputArray.forEach((element, index, array) => {
    raiseTo = array.length - index - 1;
    if (+element) {
      element = +element;
    } else {
      element = element.toUpperCase().charCodeAt() - 55;
    }
    outArray.push(element);
    check = outArray.filter((e) => e >= inBase).length === 0;
    if (check) {
      outNumber +=
        element * Math.pow(inBase, raiseTo) /* ,+element,inBase,raiseTo] */;
    } else {
      outNumber = `${inNum.toUpperCase()} is not in base ${inBase}`;
    }
  });

  return outNumber;
}

function convertBases(inBase, inNumber, outBase) {
  const inDec = convertToDec(inNumber, inBase);
  let outNumber;
  if (+inDec) {
    outNumber = convertDecToBaseN(outBase, inDec);
  } else outNumber = `<span Error>Conversion cannot take place</span>`;

  return outNumber;
}

/* console.log(convertBases(2, 1101, 13)); */
