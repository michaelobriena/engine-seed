var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var HeaderFooter = require('famous/layouts/HeaderFooter');

FamousEngine.init();

var hf = new HeaderFooter({
    headerSize: 50,
    footerSize: 200
});

FamousEngine.createScene().addChild(hf);

new DOMElement(hf.getHeader(), {
    content: '0',
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