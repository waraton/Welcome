const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mutate = document.getElementById("mutate");

const SIZE = 800;

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
    this.lineWidth = Math.random() * 5 + 2;
    this.hue = Math.random() * 360;
    this.SIDES = 6;
    this.maxLevel = 5;
    this.diverge = Math.random() * 0.5 + 0.5;
    this.scale = Math.random() * 0.1 + 0.7;
    this.branches = 4;
    this.branchSize = SIZE * 0.15;
    this.drawMode = drawMode;
  }

  draw(ctx) {
    ctx.lineWidth = this.lineWidth;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    for (let i = 0; i < this.SIDES; i++) {
      this.drawBranch(ctx, 0);
      ctx.rotate((Math.PI * 2) / this.SIDES);
    }
    ctx.restore();
  }

  drawBranch(ctx, level) {
    if (level > this.maxLevel) return;
    let lightness = 2.5 + level * 8;

    if (this.drawMode === "branched") {
      ctx.strokeStyle = `hsl(${this.hue}, 50%, ${lightness}%)`;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this.branchSize, 0);
      ctx.stroke();
    } else if (this.drawMode === `circles`) {
      ctx.fillStyle = `hsl(${this.hue - 10}, 70%, ${lightness + 5}%)`;
      ctx.beginPath();
      ctx.arc(this.branchSize + 12, 12, this.lineWidth, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.drawMode === `sparks`) {
      if (level > this.maxLevel - 4 && Math.random() < 0.05) {
        ctx.fillStyle = `hsl(${this.hue - 10}, 70%, ${lightness + 5}%)`;
        ctx.globalAlpha = 0.5;

        for (let i = 0; i < 5; i++) {
          ctx.save();
          ctx.translate(60, 80);
          ctx.rotate(Math.PI * 0.4 * i);
          ctx.beginPath();
          ctx.ellipse(0, 8, 4, 50, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
        ctx.globalAlpha = 1;
      }
    }

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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const fractal = new Fractal("branched");
  fractal.draw(ctx);
  fractal.drawMode = `sparks`;
  fractal.draw(ctx);/*
  fractal.drawMode = `circles`;
  fractal.draw(ctx); */
}

drawFractal();

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineCap = "round";
  ctx.shadowColor = "#222a";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  drawFractal();
}
resizeCanvas();
window.addEventListener(`resize`, resizeCanvas);
mutate.addEventListener("click", drawFractal);
