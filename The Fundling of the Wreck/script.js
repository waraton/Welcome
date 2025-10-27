const courser = document.querySelector('[courser]')

const moveCursor = function(x, y, s) {
  courser.style.left = x + 'px';
  courser.style.top = y + 'px';
  courser.style.background = `hsl(${60*(4 - 3 * s)} 100% ${25 - -25 * s}%)`;
  courser.style.boxShadow = `${-1/2}rem ${-1/2}rem 0 .5rem hsla(${60*(3 * s + 1)}, 100%, ${50 - 25 * s}%, ${1 - .25 * s})`;
}

document.addEventListener('mousemove', e=>moveCursor(e.x,e.y,e.target.localName === 'a' ? 1 : 0))