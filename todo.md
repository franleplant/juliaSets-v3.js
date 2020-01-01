In order to make the figure zoomable I need to:

- Abstract the way I get the first value of `x` and `y` and `dx` and `dy`

RangeX,RangeY should be a fixed parameter

Ideally I'd like to have a function with this signature:

```js

function getFirstPointsAndStep(centerX, centerY) => {x0, y0, dx, dy}


// by default it should be used as follows:

getFirstPointsAndStep(0,0) => {-1, 1, ...}
```


getInitialState ?


