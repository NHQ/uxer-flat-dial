var spin = require('uxer/spin');
var shims = require('uxer/shims');
var Flatdial = require('../flatdial');

var knobs = [];
shims.disableWindowBounce();

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

	// the current point's distance from the center of the element
//	console.log(e.detail.dxcenter)

	var data = e.detail;

	// this is your true value, the delta
	var delta = data.delta; // of 360

	spinDegree += delta
//	console.log(delta, spinDegree);

	flatdial.node.style['-webkit-transform'] = 'rotateZ('+(spinDegree)+'deg)'
    });
}

//window.webkitRequestAnimationFrame(anim8)

function anim8(){

    window.webkitRequestAnimationFrame(anim8)
};
