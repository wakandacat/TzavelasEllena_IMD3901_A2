'use strict'

AFRAME.registerComponent('selected-colour', {
    schema: {
        color: {type: 'color', default: '#ebf7f5'},
    },
    multiple:false,
    init: function() { //setup/constructor

        const data = this.data;
        var el = this.el;
        var snow = document.querySelectorAll('.snow');
        var scene = document.querySelector('a-scene');
        var cursor = document.querySelector('#mouse');
        var text = document.querySelector('#text');

        //the mouseover changes the colour of the snow pile
        el.addEventListener('mouseenter', function () {
            
            if(scene.getAttribute('hold-state').isHolding == false){
                for (let i = 0; i < snow.length; i++) {
                    snow[i].removeAttribute('material', 'color');
                    snow[i].setAttribute('material','color', data.color);
                }
                text.setAttribute('visible', true);
            }
        });
        
        //when mouse leaves change the colour back
        //make the function seperate so that we can use it again when a ball is currently being held
        el.addEventListener('mouseleave', leftArea);

        function leftArea(){
            if(scene.getAttribute('hold-state').isHolding == false){
                for (let i = 0; i < snow.length; i++) {
                    snow[i].removeAttribute('material', 'color');
                    snow[i].setAttribute('material','color', 'rgb(186, 216, 210)');
                }
                text.setAttribute('visible', false);
            }
        }

        //when the snow pile is clicked, create a snowball and hold it
        el.addEventListener('click', function () {
            if(scene.getAttribute('hold-state').isHolding == false){
                //create the snowball
                var snowBall = document.createElement('a-entity');
                snowBall.setAttribute('class', 'ball interactive');
                snowBall.setAttribute('geometry', {primitive: 'sphere'},{radius: '0.1'});
                snowBall.setAttribute('material', {color: 'rgb(186, 216, 210)'});
                snowBall.setAttribute('position', '0 0 -2');
                snowBall.setAttribute('scale', '0.5 0.5 0.5'); 
                snowBall.setAttribute('ball-manipulation', {isManipulating: true});  
                cursor.appendChild(snowBall); //append it to the cursor

                //create the text that appears beside the snowball
                var text = document.createElement('a-entity');
                text.setAttribute('id', 'text2');
                text.setAttribute('visible', true);
                text.setAttribute('text', {value: 'CLICK TO THROW', color: 'rgb(86, 227, 199)', font: 'exo2bold', width: '1.5', anchor: 'left', baseline: 'top', wrapCount: '12'});   
                text.setAttribute('position', '0.5 0.5 -1')
                cursor.appendChild(text); //append it to the cursor

                //make sure the snow pile is not interactable while snowball is held
                leftArea();
            }
        });
    },
});