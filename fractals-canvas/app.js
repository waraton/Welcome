const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mutate = document.getElementById("mutate");

const SIZE = 600;
canvas.width = SIZE;
canvas.height = SIZE;
ctx.lineCap = "round";
ctx.shadowColor = "#222a";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
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

class Fractal {
  // properties
  constructor(drawMode) {
    this.lineWidth = Math.random() * 5 + 5;
    this.hue = Math.random() * 360;
    this.SIDES = 6;
    this.maxLevel = 5;
    this.diverge = Math.random() * 0.5 + 0.5;
    this.scale = Math.random() * 0.1 + 0.7;
    this.branches = 4;
    this.branchSize = SIZE * 0.125;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.lineWidth = this.lineWidth;
    ctx.save();
    ctx.translate(SIZE / 2, SIZE / 2);
    for (let i = 0; i < this.SIDES; i++) {
      this.drawBranch(ctx, 0);
      ctx.rotate((Math.PI * 2) / this.SIDES);
    }
    ctx.restore();
  }

  drawBranch(ctx, level) {
    if (level > this.maxLevel) return;
    let lightness = 15 + level * 15;
    ctx.strokeStyle = `hsl(${this.hue}, 50%, ${lightness}%)`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.branchSize, 0);
    ctx.stroke();

    for (let i = 0; i < this.branches; i++) {
      const ref = this.branchSize - (this.branchSize / this.branches) * i;
      ctx.save();
      ctx.translate(ref, 0);
      ctx.scale(this.scale, this.scale);
      ctx.rotate((this.diverge * i * 2) / this.branches - this.diverge);
      this.drawBranch(ctx, level + 1);
      ctx.restore();
    }
  }
}

function drawFractal() {
  const fractal = new Fractal();
  fractal.draw(ctx);
}

drawFractal();

mutate.addEventListener("click", drawFractal);
