import Color from 'color-js'

let C = [0.279, 0]
let N = 500
let M = N;
let RangeX = 2
let RangeY = RangeX
let COLOR_K = 5

let canvas = document.getElementById('canvas');
canvas.width = N;
canvas.height = M;
let ctx = canvas.getContext("2d");

function getInitialState(xCenter, yCenter, RangeX = 2, RangeY = 2, N, M) {
  return {
    dx: RangeX / N,
    dy: RangeY / M,
    x0: xCenter - (RangeX / 2),
    y0: yCenter + (RangeY / 2)
  }
}

let initialColor = Color({hue: 150, saturation: 0.9, value: 0.9})

function draw() {
  RangeY = RangeX *= 0.95
  let initialState =  getInitialState(0.5, 0.174, RangeX, RangeY, N, M)
  let B = fractal(initialState, initialColor, N, M)
  let arr = new Uint8ClampedArray(B)
  let img = new ImageData(arr, N, M)
  ctx.putImageData(img, 0, 0)
  window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw)



let BAILOUT = 2
let MAX_ITER = 360;
// (initialState) => colorArray B
// colorArray: [r0,g0,b0,a0, r1,g1,b1,a1, ...]
function fractal({x0, y0, dx, dy}, initialColor, N, M) {
  let k, x, y, xx, yy, u, v, pos, col, color
  let B = []


  for (let j = 0; j < M; j++ ) {
    for (let i = 0; i < N; i++) {
      x = x0 + i*dx
      y = y0 - j*dy

      xx = x*x
      yy = y*y

      for (k = 0; k < MAX_ITER && (xx + yy <= BAILOUT); k++) {
        u = xx - yy + C[0]
        v = 2*x*y + C[1]

        x = u
        y = v

        xx = x*x
        yy = y*y
      }
      pos = 4 * M * j
      col = 4 * i

      let {red, green, blue, alpha} = initialColor.shiftHue(k * COLOR_K % 360).toRGB()
      B[pos + col + 0] = red*255
      B[pos + col + 1] = green*255
      B[pos + col + 2] = blue*255
      B[pos + col + 3] = alpha*255

    }
  }

  return B
}



