# uxer flat dial

flat dial is a flat UI component that gives you a spin event for whatever element you cast it on. It works for touch and regular mouse drag. You just cast this function on an element, and then element.addEventListener('spin', spinFunc); 

Your function will get an event object with some parameters, like vector, delta, and degreeChange. You can use those as ingredients in ur css to make the dial spin, as in the example below. An use it to create spin/swirl interactions.

Flat Dial uses the spin module from a proto library of UI components called [uxer](https://github.com/NHQ/uxer) which uses the event module [touchdown](https://github.com/NHQ/touchdown) at its core.

To use, install and require it.

```
npm install uxer-flat-dial
```
```js
var dial = require('uxer-flat-dial');
var myDialElement = dial(); // returns an HTMLElement
```

See the example below, which can be easily run if you have browserify and opa installed:
```
npm install -g browserify opa
git clone https://github.com/NHQ/uxer-flat-dial.git
cd uxer-flat-dial
npm install .
opa -e examples/example.js -n
```

## Options

pass an options object to the function (see below);
options are:
```
height
width
color
bgcolor
```

## Example - from examples/example.js

```js
var spin = require('uxer/spin');
var Flatdial = require('../flatdial');


init(200, 'green', '#eef',710, 10)
init(150, 'OrangeRed', 'brown', 240, 35)
init(100, 'Gold', 'rgb(0,200,30)', 420, 70)
init(50,'#000','yellow', 550, 105)

function init(w, c, bg, left, top){

    var opts = {};

    opts.width = w; // set width or height and the other will be set automatically for roundness
    opts.color = c;
    opts.bgcolor = bg;

    var flatdial = Flatdial(opts);

    // create a parent div to position our dial on the page
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style['margin-left'] = left + 'px';
    div.style['margin-top'] = top + 'px';

    div.appendChild(flatdial.node);

    document.body.appendChild(flatdial.style)
    document.body.appendChild(div)

    spin(flatdial.node);

    var spinDegree = 90;

    flatdial.node.addEventListener('spin', function(e){


	var data = e.detail;

	// the current point's distance from the center of the element
	var dxc = data.dxcenter;

	// this is your true value, the delta
	var delta = data.delta; // a value of +/- x out of 360

	// the wiseness of your user's clockity
	var clockwise = data.clockwise 

	spinDegree += delta

	flatdial.node.style['-webkit-transform'] = 'rotateZ('+(spinDegree)+'deg)'
    });
}

```