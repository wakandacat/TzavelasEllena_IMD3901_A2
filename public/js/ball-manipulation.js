'use strict'

AFRAME.registerComponent('ball-manipulation', {
    schema: {
        isManipulating: {type: 'boolean', default: true}
    },
    multiple:false,
    init: function() { //setup/constructor

        console.log( this.data.isManipulating);
        const data = this.data;
        var el = this.el;
        var snow = document.querySelectorAll('.snow');
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('#cam');

        el.addEventListener('click', function () {
            el.sceneEl.object3D.attach(el.object3D); //release by attaching back to the scene
            el.setAttribute('dynamic-body', {shape: 'sphere'},{radius: '0.1'}); 
            
            //set isHolding back to false
            data.isManipulating = false;

        });
    },
    tick: function(){

        var el = this.el;

        var myScale = document.getElementById("ballScale").value / 10;
        el.setAttribute('scale', {x: myScale, y: myScale, z: myScale});

        var myColor = document.getElementById("ballColor").value;
        el.setAttribute('material', {color: myColor});
    },
});