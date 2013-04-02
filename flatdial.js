var fs = require('fs');
var html = fs.readFileSync('./assets/flatdial.html', 'utf8');
var css = fs.readFileSync('./assets/flatdial.css', 'utf8');

module.exports = function(opts){

  var dial = makenode(html);
  var dialStyle = makeStyle(css);
  var marker = dial.querySelectorAll('.uxer-flatdial-marker')[0];

  if(opts.width || opts.height) {
    var w = opts.width || opts.height
    dial.style.width = dial.style.height = w + 'px'
    dial.style['border-width'] = (w * .06) + 'px'
  }

  if(opts.color){
    dial.style['border-color'] = opts.color;
    Array.prototype.slice.call(dial.children, 0).forEach(function(e){e.style['background'] = opts.color});
  }

  if(opts.bgcolor){
    dial.style['background-color'] = opts.bgcolor;
  }
  
  dial.uxerValue = 0;
  
  return {node: dial, style: dialStyle, script: null}

}

function makenode(str){
  var d = document.createElement('div');
  d.innerHTML = str;
  var e = d.firstChild;
  return e;
}

function makeStyle(str){
  var style = document.createElement('style');
  style.textContent = str;
  return style
}

function mergeCSS(el, opts){
  for(var x in opts){
    el.style[x] = opts.x
  }
}
