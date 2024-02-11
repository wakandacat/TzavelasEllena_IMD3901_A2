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

        //snowball collide with floor
        el.addEventListener('collide', function (e) {

            var myColor = document.getElementById("ballColor").value
            var myScale = document.getElementById("ballScale").value / 10;

            var splat = document.createElement('a-entity');
            splat.setAttribute('geometry', {primitive: 'circle'},{radius: '1'});
            splat.setAttribute('material', {color: myColor});
            splat.setAttribute('position', {x:e.detail.contact.ni.x, y:0.015, z:e.detail.contact.ni.z});
            splat.setAttribute('rotation', '-90 0 0'); 
            splat.setAttribute('scale', {x:myScale, y:myScale, z:myScale});
            scene.appendChild(splat); 

            setTimeout(function() { //delete between frames?
               // console.log('collision with enemy', e.detail.body.el);
                e.detail.body.el.parentNode.removeChild(e.detail.body.el);
              }, 0);

               // e.detail.body.el;    // Other entity, which playerEl touched.
              //  e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
               // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).     
            
          });

        el.flushToDOM();

    },
    tick: function(){

        var el = this.el;
        const data = this.data;
        var cursor = document.querySelector('#mouse');
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('#cam');

        if(data.isManipulating == true){
            var myScale = document.getElementById("ballScale").value / 10;
            el.setAttribute('scale', {x: myScale, y: myScale, z: myScale});
    
            var myColor = document.getElementById("ballColor").value;
            el.setAttribute('material', {color: myColor});
    
            el.addEventListener('click', function () {
               
                data.isManipulating = false;

                el.setAttribute('dynamic-body', {shape: 'sphere', radius: myScale});
                
               // let camRot = camera.getAttribute('rotation');
                //console.log(camRot);

                el.body.velocity.set(3, 3, 0);
              // el.body.applyImpulse(new CANNON.Vec3(3, 3, 0), new CANNON.Vec3().copy(position));
   
             });

             
        }
        

    },
});