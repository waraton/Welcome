const inputs1 = document.querySelectorAll("#convertDecToBaseN input");
const output1 = document.querySelector("#convertDecToBaseN output");
const submit1 = document.querySelector(`#convertDecToBaseN button`);

const inputs2 = document.querySelectorAll("#convertToDec input");
const output2 = document.querySelector("#convertToDec output");
const submit2 = document.querySelector(`#convertToDec button`);

const inputs3 = document.querySelectorAll("#convertBases input");
const output3 = document.querySelector("#convertBases output");
const submit3 = document.querySelector(`#convertBases button`);

const errorMSG = 'Do not leave the input empty.'

submit1.addEventListener("click", () => {
  if (inputs1[1].value && inputs1[0].value && inputs1[0].value < 23) {
    const BASE = Number(inputs1[0].value);
    const NUMBER = Number(inputs1[1].value);
    const output = convertDecToBaseN(BASE, NUMBER);
    output1.innerHTML = `${output}<sub>${BASE}</sub>`;
  } else {
    console.error(errorMSG);
    output1.innerHTML = `<span error>${errorMSG}</span>`;
  }
});

submit2.addEventListener("click", () => {
  if (inputs2[1].value && inputs2[0].value && inputs2[0].value < 23) {
    const BASE = Number(inputs2[0].value);
    const NUMBER = inputs2[1].value;
    const output = convertToDec(BASE, NUMBER);
    if (Number(output)) {
      output2.innerHTML = `${output}<sub>${10}</sub>`;
    } else {
      console.log(`${output}: ${NUMBER} is not in base ${BASE}`);
      output2.innerHTML = `<span Error>${NUMBER} is not in base ${BASE}</span>`;
    }
  } else {
    console.error(errorMSG);
    output2.innerHTML = `<span Error>${errorMSG}</span>`;
  }
});

submit3.addEventListener("click", () => {
  if (inputs3[1].value && inputs3[0].value && inputs3[0].value < 23) {
    const BASEiN = Number(inputs3[0].value);
    const NUMBERiN = inputs3[1].value;
    const BASEoUT = inputs3[2].value;
    const output = convertBases(BASEiN, NUMBERiN, BASEoUT);
    if (Number(output)) {
      output3.innerHTML = `${output}<sub>${BASEoUT}</sub>`;
    }else output3.innerHTML = `${output}`;
  } else {
    console.error(errorMSG);
    output3.innerHTML = `<span Error>${errorMSG}</span>`;
  }
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
  inputArray.forEach((element, index, array) => {
    raiseTo = array.length - index - 1;
    if (+element) {
      element = +element;
    } else {
      element = element.toUpperCase().charCodeAt() - 55;
    }
    outArray.push([element, raiseTo]);
    if (element < inBase) {
      outNumber += element * Math.pow(inBase, raiseTo);
    } else {
      console.error("conflicting base and input number");
      outNumber = `<span Error>${inNum} is not in base ${inBase}</span>`;
    }
  });
  return outNumber;
}

function convertBases(inBase, inNumber, outBase) {
  const inDec = convertToDec(inBase, inNumber);
  let outNumber;
  if (+inDec) {
    outNumber = convertDecToBaseN(outBase, inDec);
  } else outNumber = `<span Error>Conversion cannot take place</span>`;

  return outNumber;
}
