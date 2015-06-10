// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Grid = require('famous/layouts/Grid');
var randomColor = require('./randomColor');

FamousEngine.init();

var grid = new Grid({
    dimensions: [2, 2],
    verticalSpacing: 100,
    horizontalSpacing: 100
});

FamousEngine.createScene().addChild(grid);

for (var i = 0; i < 3; i++) {
    new DOMElement(grid.addChild(), {
        content: i,
        properties: {
            backgroundColor: randomColor()
        }
    });
}

