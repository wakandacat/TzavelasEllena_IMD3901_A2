'use strict'

AFRAME.registerComponent('ball-manipulation', {
    schema: {
       
    },
    multiple:false,
    init: function() { //setup/constructor

        const data = this.data;
        var el = this.el;
        var snow = document.querySelectorAll('.snow');
        var text = document.querySelector('#text');
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('#cam');

        //physics stuff
        var velocity = 5;
        var gravity = -9.8;
    
        console.log(camera.getAttribute('rotation')); 

        el.addEventListener('click', function () {
            console.log("throw");
        });
    },
    tick: function(){

        //.el refers to the element that this current component/attribute is attached to
        // this.el.addEventListener('mousemove', function (event) {
        //     console.log("hi");
        //     let x = event.clientX;
        //     let y = event.clientY;
        //     console.log("x: " + x + " " + "y: " + y);
        // });
    
       // el.setAttribute('position',);
    },
});