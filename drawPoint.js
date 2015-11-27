import Color from 'color-js'


export default function drawPointFactory(width, height, initialColor, MAX_ITER, COLOR_K = 2) {
  let color
  let canvas = document.getElementById('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas = canvas.getContext("2d");


  return function drawPoint(x, y, k) {
    //color = initialColor.shiftHue(k * COLOR_K % 360).desaturateByRatio(k/MAX_ITER).toCSS()
    color = initialColor.shiftHue(k * COLOR_K % 360).toCSS()
    canvas.fillStyle = color
    canvas.fillRect(x,y,1,1)
  }
}
