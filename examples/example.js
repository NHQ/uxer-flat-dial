var spin = require('uxer/spin');
var Flatdial = require('../flatdial');
var center = require('uxer').center;

init(200, 'green', '#eef', 10, 10)
init(150, 'OrangeRed', 'brown', 250, 35)
init(100, 'Gold', 'rgb(0,200,30)', 430, 70)
init(50,'#000','yellow', 560, 105)

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

    var spinDegree = 0;

    flatdial.node.addEventListener('spin', function(e){


	var data = e.detail;

	// the current point's distance from the center of the element
	var dxc = data.dxcenter;

	// this is your true value, the delta
	var delta = data.delta; // a value of +/- x out of 360

	// the wiseness of your user's clockity
	var clockwise = data.clockwise 

	spinDegree += delta || 0

	flatdial.node.style['-webkit-transform'] = 'rotateZ('+(spinDegree)+'deg)'
    });
}
