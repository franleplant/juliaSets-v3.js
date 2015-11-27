import Color from 'color-js'
import drawPointFactory from './drawPoint'

let C = [0.279, 0]
let MAX_ITER = 1000;
let N = 500
let M = N;
let RangeX = 3
let RangeY = RangeX
let BAILOUT = 2

let COLOR_K = 5
let initialColor = Color({hue: 150, saturation: 0.9, value: 0.9})



let drawPoint = drawPointFactory(N, M, initialColor, MAX_ITER, COLOR_K)

fractal(drawPoint)

function fractal(drawPoint) {
  let k, x, y, xx, yy, u, v
  let dx = RangeX / N
  let dy = RangeY / M

  for (let j = 0; j < M; j++ ) {
    for (let i = 0; i < N; i++) {
      x = -(RangeX / 2) + i*dx
      y =  (RangeY / 2) - j*dy
      console.log(i,j,x,y)

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
      drawPoint(i, j, k)
    }
  }
}



