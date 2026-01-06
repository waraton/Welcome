const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mutate = document.getElementById("mutate");

const SIZE = 64;
canvas.width = SIZE;
canvas.height = SIZE;
ctx.strokeStyle = "orange";
ctx.lineWidth = 1;
/** PROPERTIES
 *
 * @constant SIDES define sides of the fractal
 * @constant branchSize define length of lines of the fractal
 * @constant maxLevel define maximum number os branches
 * @constant diverge define how wide the branches are
 * @constant scale define scaling factor of the branches
 * @constant scale define number of the branches
 */

function drawFractal() {
  const SIDES = 3;
  const maxLevel = 4;
  const diverge = Math.random() * 1 - 0.5;
  const scale = Math.random() * 0.4 + 0.4;
  const branches = 6;

  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);
  for (let i = 0; i < SIDES; i++) {
    drawBranch(0, maxLevel, diverge, scale, branches);
    ctx.rotate((Math.PI * 2) / SIDES);
  }
  ctx.restore();
}

function drawBranch(level, maxLevel, diverge, scale, branches) {
  if (level > maxLevel) return;
  const branchSize = SIZE * 0.25;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  for (let i = 0; i < branches; i++) {
    const ref = branchSize - (branchSize / branches) * i;
    ctx.save();
    ctx.translate(ref, 0);
    ctx.scale(scale, scale);
    ctx.rotate(diverge);
    drawBranch(level + 1, maxLevel, diverge, scale, branches);
    ctx.restore();
  }
}
drawFractal();

mutate.addEventListener("click", drawFractal);
