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
 */
const SIDES = 4;

function drawFractal() {
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);
  for (let i = 0; i < SIDES; i++) {
    drawBranch(0);
    ctx.rotate((Math.PI * 2) / SIDES);
  }
  ctx.restore();
}

function drawBranch(level) {
  if (level > 6) return;
  const branchSize = 100;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  ctx.save()
  ctx.translate(branchSize, 0);
  ctx.scale(0.7, 0.7);

  ctx.save();
  ctx.rotate(0.8);
  drawBranch(level + 1);
  ctx.restore();

  ctx.save();
  ctx.rotate(-0.8);
  drawBranch(level + 1);
  ctx.restore();
  ctx.restore();
}
drawFractal();
