const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const SIZE = 600;
canvas.width = SIZE;
canvas.height = SIZE;
ctx.strokeStyle = "orange";
ctx.lineWidth = 8;
/** PROPERTIES
 *
 * @constant SIDES define sides of the fractal
 * @constant branchSize define length of lines of the fractal
 * @constant maxLevel define maximum number os branches
 */
const SIDES = 4;
const maxLevel = 5

function drawFractal() {
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);
  for (let i = 0; i < SIDES; i++) {
    drawBranch(0,maxLevel);
    ctx.rotate((Math.PI * 2) / SIDES);
  }
  ctx.restore();
}

function drawBranch(level,maxLevel) {
  if (level > maxLevel) return;
  const branchSize = 100;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  for (let i = 0; i < 2; i++) {
    ctx.save()
    ctx.translate(branchSize, 0);
    ctx.scale(0.7, 0.7);
    ctx.rotate(1.2 * i);
    drawBranch(level + 1,maxLevel);
    ctx.restore();
  }
}
drawFractal();
