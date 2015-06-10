var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Flexbox = require('famous/layouts/Flexbox');
var randomColor = require('./randomColor')

FamousEngine.init();

var flexbox = new Flexbox({
    direction: 0
});

FamousEngine.createScene().addChild(flexbox);

for (var i = 0; i < 4; i++) {
    var node = flexbox.addChild();
    flexbox.setRatioAtIndex(i, i + 1);

    new DOMElement(node, {
        properties: {
            backgroundColor: randomColor()
        }
    });
}
