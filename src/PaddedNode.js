// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var PaddedNode = require('famous/layouts/PaddedNode');
var randomColor = require('./randomColor');

FamousEngine.init();

var paddedNode = new PaddedNode({
    top: 100,
    right: 400,
    left: 90,
    bottom: 20
});

FamousEngine.createScene().addChild(paddedNode);

var child = paddedNode.addChild();

new DOMElement(child, {
    content: 'aljkdshflkj',
    properties: {
        backgroundColor: randomColor()
    }
});

