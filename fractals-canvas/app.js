const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mutate = document.getElementById("mutate");

const SIZE = 600;
canvas.width = SIZE;
canvas.height = SIZE;
ctx.lineCap = 'round'
ctx.shadowColor = '#222a'
ctx.shadowBlur = 8
ctx.shadowOffsetX = 5
ctx.shadowOffsetY = 5
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
  const lineWidth = Math.random() * 5 + 2;
  const SIDES = 5;
  const maxLevel = 5;
  const diverge = Math.random() * 2 - 1;
  const scale = Math.random() * 0.1 + 0.4;
  const branches = 4 ;

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
  let lightness = 5 + level * 15
  ctx.strokeStyle = `hsl(${hue}, 75%, ${lightness}%)`;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  for (let i = 0; i < branches; i++) {
    const ref = branchSize - (branchSize / branches) *  i;
    ctx.save();
    ctx.translate(ref, 0);
    ctx.scale(scale, scale);
    ctx.rotate(diverge * (i - (branches - diverge * 5 + Math.random() * 1.5) / 2));
    drawBranch(level + 1, maxLevel, diverge, scale, branches, hue);
    ctx.restore();
  }
}
drawFractal();

mutate.addEventListener("click", drawFractal);
