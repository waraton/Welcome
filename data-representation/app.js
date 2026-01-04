const citiesData = [
  ['shanghai', 'china', 10_820_000],
  [`tokyo`, `japan`, 8_786_300],
  [`new york`, `u.s.a`, 8_876_033],
  [`mexico city`,`mexico`,7_768_033],
  [`peking`,`china`,7_570_000],
  [`london`,`england`,7_340_000],
  [`moscow`,`u.s.s.r`,6_941_961],
  [`bombay`,`india`,5_970_575],
  [`seoul`,`south korea`,5_433_198],
  [`sao paulo`,`brazil`,5_186_752],
  [`cairo`,`egypt`,4_961_000],
  [`djakarta`,`indonesia`,4_576_009],
  [`tientsin`,`china`,4_280_000],
  [`rio de janeiro`,`brazil`,4_252_009],
  [`hong kong`,`hong kong`,4_160_000],
  [`tehran`,`iran`,3_858_000],
  [`port arthur-dairen`,`china`,3_600_000],
  [`leningrad`,`u.s.s.r`,3_512_974],
  [`karachi`,`pakistan`,3_469_000],
  [`chicago`,`u.s.a`,3_293_300],
  [`delhi`,`india`,3_287_883],
  [`calcutta`,`india`,3_148_746],
  [`madrid`,`spain`,3_146_071],
  [`buenos aires`,`argentina`,2_972_453],
  [`osaka`,`japan`,2_889_144]
].sort()

const generateColor = (n) => {
  const [min, max] = [n, 255];
  const b = () => (Math.random() * (max - min) + min).toFixed(2);

  return `rgb(${b()}, ${b()}, ${b()})`;
}

const tableBody = document.querySelector(`table tbody`)
let totalPopulation = 0;

citiesData.forEach((cityData, index) => {
  cityData.push(generateColor(index+1))
  totalPopulation += cityData[2]
  tableBody.innerHTML += `<tr data-bg='${cityData[cityData.length - 1]}'>
    <td>${cityData[0]}, ${cityData[1]}</td><td>${cityData[2].toLocaleString()}</td>
  </tr>`
})

tableBody.querySelectorAll(`[data-bg]`).forEach((element,index)=>{
  element.style.backgroundImage = `linear-gradient(${element.dataset.bg} 0, ${element.dataset.bg} 100%)`;
  element.style.backgroundSize = `${citiesData[index][2] / totalPopulation * 1200}%`
  console.log(`${citiesData[index][2] / totalPopulation * 100}%`);
})