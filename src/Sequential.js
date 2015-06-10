// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Sequential = require('famous/layouts/Sequential');
var randomColor = require('./randomColor');

FamousEngine.init();

var sequential = new Sequential({
    // itemSize: 400,
    direction: 1
});

FamousEngine.createScene().addChild(sequential);

var nodes = [];
for (var i = 0; i < 4; i++) {
    var node = sequential.addChild();
    nodes.push(node);
    if (i%2) {
        node.setSizeMode(1, 1, 0);
        node.setAbsoluteSize(80, 80)
    } else {
        node.setSizeMode(0, 0, 0);
        node.setProportionalSize(.2, .2);
    }

    new DOMElement(node, {
        properties: {
            backgroundColor: randomColor()
        }
    });
}

sequential.addChild();
window.s = sequential;