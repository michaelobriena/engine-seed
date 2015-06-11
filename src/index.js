'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var Camera = require('famous/components/Camera');
var FamousEngine = require('famous/core/FamousEngine');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var scene = FamousEngine.createScene();

var root = scene.addChild();
var logo = root.addChild();

// Create an [image] DOM element providing the logo 'node' with the 'src' path
new DOMElement(logo, { tagName: 'img' })
    .setAttribute('src', './images/famous_logo.png');

// Chainable API
logo
    // Set size mode to 'absolute' to use absolute pixel values: (width 250px, height 250px)
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(250, 250)
    // Center the 'node' to the parent (the screen, in this instance)
    .setAlign(0.5, 0.5)
    // Set the translational origin to the center of the 'node'
    .setMountPoint(0.5, 0.5)
    // Set the rotational origin to the center of the 'node'
    .setOrigin(0.5, 0.5)
    .setPosition(0, 0, -2000)

// Add a spinner component to the logo 'node' that is called, every frame
var spinner = logo.addComponent({
    onUpdate: function(time) {
        logo.setRotation(0, time / 1000, 0);
        logo.requestUpdateOnNextTick(spinner);
    }
});

// Let the magic begin...
logo.requestUpdate(spinner);


var cameraNode = root.addChild();
var camera = new Camera(cameraNode);

var mover = cameraNode.addComponent({
    onUpdate: function(time) {
        console.log(time/10 % 1000 - 500)
        cameraNode.setPosition(time/10 % 1000 - 500, 0, 0);
        cameraNode.requestUpdateOnNextTick(mover);
    }
});


cameraNode.requestUpdate(mover);