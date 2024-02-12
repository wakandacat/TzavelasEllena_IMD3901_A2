'use strict'

AFRAME.registerComponent('ball-manipulation', {
    schema: {
        isManipulating: {type: 'boolean', default: true}
    },
    multiple:false,
    init: function() { //setup/constructor

        var el = this.el;
        var scene = document.querySelector('a-scene');

        //snowball collide with floor
        el.addEventListener('collide', function (e) {

            var myColor = document.getElementById("ballColor").value
            var myScale = document.getElementById("ballScale").value / 10;

            //create a splatter where the snowball hit the ground
            var splat = document.createElement('a-entity');
            splat.setAttribute('geometry', {primitive: 'circle'},{radius: '1'});
            splat.setAttribute('material', {color: myColor});
            splat.setAttribute('position', {x:e.detail.contact.rj.x, y:0.015, z:e.detail.contact.rj.z});
            splat.setAttribute('rotation', '-90 0 0'); 
            splat.setAttribute('scale', {x:myScale, y:myScale, z:myScale});
            scene.appendChild(splat); 

            //delete the snowball once it hits the ground
            setTimeout(function() { //delete between frames?
                e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            }, 0);    
            
          });

        el.flushToDOM();

    },
    tick: function(){

        var el = this.el;
        const data = this.data;
        var camera = document.querySelector('#cam');

        //if there is a snowball being held currently
        if(data.isManipulating == true){
            //get the scale from the slider
            var myScale = document.getElementById("ballScale").value / 10;
            el.setAttribute('scale', {x: myScale, y: myScale, z: myScale});
            
            //get the color from the slider
            var myColor = document.getElementById("ballColor").value;
            el.setAttribute('material', {color: myColor});
            
            //once the ball is clicked "thrown"
            el.addEventListener('click', function () {
               
                data.isManipulating = false;

                //add the physics body to it so it'll apply gravity
                el.setAttribute('dynamic-body', {shape: 'sphere', radius: myScale});
                
                //get the current camera direction
                var direction = new THREE.Vector3();
                direction = camera.object3D.getWorldDirection(direction);

                //add a force
                var forceMagnitude = -0.25;
                el.body.applyImpulse(direction.multiplyScalar(forceMagnitude), new CANNON.Vec3());

            });            
        }
    },
});