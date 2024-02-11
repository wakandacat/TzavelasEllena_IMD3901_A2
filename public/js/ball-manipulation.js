'use strict'

AFRAME.registerComponent('ball-manipulation', {
    schema: {
        isManipulating: {type: 'boolean', default: true}
    },
    multiple:false,
    init: function() { //setup/constructor

        const data = this.data;
        var el = this.el;
        var snow = document.querySelectorAll('.snow');
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('#cam');



    },
    tick: function(){

        var el = this.el;
        const data = this.data;

        if(data.isManipulating == true){
            var myScale = document.getElementById("ballScale").value / 10;
            el.setAttribute('scale', {x: myScale, y: myScale, z: myScale});
    
            var myColor = document.getElementById("ballColor").value;
            el.setAttribute('material', {color: myColor});
    
            el.addEventListener('click', function () {
                el.sceneEl.object3D.attach(el.object3D); //release by attaching back to the scene

                data.isManipulating = false;
            });
        }
        

    },
});