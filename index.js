// select the open-btn button
let openBtn = document.getElementById('demo-btn');
// select the modal-background
let demomodalBackground = document.getElementById('demo-modal-background');
// select the close-btn 
let closeBtn = document.querySelector('.democlose-btn');

// shows the modal when the user clicks open-btn
openBtn.addEventListener('click', function() {
    demomodalBackground.style.display = 'block';
});


// hides the modal when the user clicks close-btn
closeBtn.addEventListener('click', function() {
    demomodalBackground.style.display = 'none';
});

// hides the modal when the user clicks outside the modal
window.addEventListener('click', function(event) {
    // check if the event happened on the modal-background
    if (event.target === demomodalBackground) {
        // hides the modal
        demomodalBackground.style.display = 'none';
    }
});

//call btn

let callBtn=document.getElementById('call-btn');

let callusmodalBackground = document.getElementById('callus-modal-background');


let callcloseBtn = document.querySelector('.callclose-btn');

callBtn.addEventListener('click', function() {
    callusmodalBackground.style.display = 'block';
});

callcloseBtn.addEventListener('click', function() {
    callusmodalBackground.style.display = 'none';
});



window.addEventListener('click', function(event) {
    // check if the event happened on the modal-background
    if (event.target ===callusmodalBackground) {
        // hides the modal
        callusmodalBackground.style.display = 'none';
    }
});

//reach

let reachBtn=document.getElementById('reach-btn');

let reachusmodalBackground = document.getElementById('reachus-modal-background');


let reachuscloseBtn = document.querySelector('.reachusclose-btn');

reachBtn.addEventListener('click', function() {
    reachusmodalBackground.style.display = 'block';
});

reachuscloseBtn.addEventListener('click', function() {
    reachusmodalBackground.style.display = 'none';
});



window.addEventListener('click', function(event) {
    // check if the event happened on the modal-background
    if (event.target ===reachusmodalBackground) {
        // hides the modal
        reachusmodalBackground.style.display = 'none';
    }
});



