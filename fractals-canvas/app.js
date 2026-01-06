const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mutate = document.getElementById("mutate");

const SIZE = 600;
canvas.width = SIZE;
canvas.height = SIZE;
/** PROPERTIES
 *
 * @constant SIDES define sides of the fractal
 * @constant branchSize define length of lines of the fractal
 * @constant maxLevel define maximum number os branches
 * @constant diverge define how wide the branches are
 * @constant scale define scaling factor of the branches
 * @constant branches define number of the branches
 * @constant lineWidth define width of the lines of the branches
 * @constant hue define hue of the color of the lines of the branches
 */

function drawFractal() {
  const hue = Math.random() * 360;
  const lineWidth = Math.random() * 11 + 5;
  const SIDES = 7;
  const maxLevel = 4;
  const diverge = Math.random() * 1 - 0.5;
  const scale = Math.random() * 0.2 + 0.4;
  const branches = 4;

  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.lineWidth = lineWidth;
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);
  for (let i = 0; i < SIDES; i++) {
    drawBranch(0, maxLevel, diverge, scale, branches, hue);
    ctx.rotate((Math.PI * 2) / SIDES);
  }
  ctx.restore();
}

function drawBranch(level, maxLevel, diverge, scale, branches, hue) {
  if (level > maxLevel) return;
  const branchSize = SIZE * 0.25;
  let lightness = 8 + level * 8
  ctx.strokeStyle = `hsl(${hue}, 75%, ${lightness}%)`;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  for (let i = 0; i < branches; i++) {
    const ref = branchSize - (branchSize / branches) * i;
    ctx.save();
    ctx.translate(ref, 0);
    ctx.scale(scale, scale, hue);
    ctx.rotate(diverge);
    drawBranch(level + 1, maxLevel, diverge, scale, branches, hue);
    ctx.restore();
  }
}
drawFractal();

mutate.addEventListener("click", drawFractal);
