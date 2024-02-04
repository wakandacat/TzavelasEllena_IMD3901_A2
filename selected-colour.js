'use strict'

AFRAME.registerComponent('selected-colour', {
    schema: {
        //duration: {type: 'number', default:20000}
    },
    multiple:false,
    init: function() { //setup/constructor
        //get reference to the walls
        //get reference to the button
        //then we will add the animation attribute/component
        //listen for when the button is clicked
        //play animation
        //if clicked when animation is already playing then pause it

        const CONTEXT_AF = this;
        CONTEXT_AF.snow = document.querySelector('.snow');
        CONTEXT_AF.isSelected = false;

        CONTEXT_AF.snow.setAttribute('animation', {property: 'material.color', type: 'color', to:rgb(235, 247, 245), dur:200, easing:'linear', enabled:false});

        //.el refers to the element that this current component/attribute is attached to
        CONTEXT_AF.el.addEventListener('hover', function(){
            if (CONTEXT_AF.isSpinning === true){
                //stop spinning
                console.log("stop spinning");
                CONTEXT_AF.snow.setAttribute('animation', {enabled:false});
                CONTEXT_AF.isSelected = false;
            } else {
                //start spinning
                console.log("start spinning");
                CONTEXT_AF.snow.setAttribute('animation', {enabled:true});
                CONTEXT_AF.isSelected = true;
            }
        });
    },
    // update: function() {oldData}, //only called when a property in the schema changes
    // tick: function() {time, timeDelta}, //is called every update/every frame
    // tock: function() {time, timeDelta}, //is called immediately after tick
    // remove: function() {}, //deconstructor
    // pause: function() {}, //pauses when tabbed out?
    // play: function() {},
    // updateSchema: function() {data},
});