'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Grid = require('famous/layouts/Grid');
var HeaderFooter = require('famous/layouts/HeaderFooter');

// Boilerplate code to make your life easier
FamousEngine.init();

// // // // GRID // // // 
// var grid = new Grid({
//     dimensions: [2, 2],
//     verticalSpacing: 100,
//     horizontalSpacing: 100
// });

// FamousEngine.createScene().addChild(grid);

// var children = grid.getChildren();
// console.log(children)
// for (var i = 0; i < children.length; i++) {
//     new DOMElement(children[i], {
//         content: i,
//         properties: {
//             backgroundColor: get_random_color()
//         }
//     });
// }

// // // // HF // // // 
var hf = new HeaderFooter({
    headerSize: 50,
    footerSize: 200
});

FamousEngine.createScene().addChild(hf);
new DOMElement(hf.getHeader(), {
    content: 'HEADER',
    properties: {
        backgroundColor: 'yellow'
    }
});

new DOMElement(hf.getBody(), {
    content: 'body',
    properties: {
        backgroundColor: 'blue'
    }
});

new DOMElement(hf.getFooter(), {
    content: 'FOOTER',
    properties: {
        backgroundColor: 'red'
    }
});


function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
