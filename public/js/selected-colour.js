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
        var text = document.querySelector('#text');
        var scene = document.querySelector('a-scene');
        var cursor = document.querySelector('#mouse');
        var isHolding = false;

        //.el refers to the element that this current component/attribute is attached to
        el.addEventListener('mouseenter', function () {
            if(isHolding == false){
                for (let i = 0; i < snow.length; i++) {
                    snow[i].removeAttribute('material', 'color');
                    snow[i].setAttribute('material','color', data.color);
                }
                text.setAttribute('visible', true);
            }
        });
    
        el.addEventListener('mouseleave', leftArea);

        function leftArea(){
            if(isHolding == false){
                for (let i = 0; i < snow.length; i++) {
                    snow[i].removeAttribute('material', 'color');
                    snow[i].setAttribute('material','color', 'rgb(186, 216, 210)');
                }
                text.setAttribute('visible', false);
            }
        }

        el.addEventListener('click', function () {
            if(isHolding == false){
                var snowBall = document.createElement('a-entity');
                snowBall.setAttribute('id', 'ball');
                snowBall.setAttribute('class', 'interactive');
                snowBall.setAttribute('geometry', {primitive: 'sphere'},{radius: '0.5'});
                snowBall.setAttribute('material', {color: 'rgb(186, 216, 210)'});
                snowBall.setAttribute('position', '0 1 -7.5');          
                cursor.appendChild(snowBall);
                leftArea();
                isHolding = true;
            }
        });
    },
    tick: function(){
        if (document.querySelector('#ball')){
            this.isHolding = true;
        } 
    },
});