// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var PaddedNode = require('famous/layouts/PaddedNode');
var randomColor = require('./randomColor');

FamousEngine.init();

var paddedNode = new PaddedNode({
    topPadding: 100,
    rightPadding: 50,
    leftPadding: 90,
    bottomPadding: 20
});

FamousEngine.createScene().addChild(paddedNode);

var child = paddedNode.addChild();

new DOMElement(child, {
    content: 0,
    properties: {
        backgroundColor: randomColor()
    }
});
