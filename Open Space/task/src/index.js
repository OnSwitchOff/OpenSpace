let passInput = document.querySelector('.textInput');
let okBtn =  document.querySelector('.control-panel__inner>input[value=ok]');
const password = 'TrustNo1';

let checkBoxes = document.querySelectorAll('.check-buttons>input');
let leversInp = document.querySelectorAll('.levers>input');
let launchBtn = document.querySelector('.control-panel__inner>input[value=launch]');

let checkIsAllChecked = () => Array.from(checkBoxes).every((ch) => ch.checked = true);
let checkIsAllMaxed = () => Array.from(leversInp).every((l) => l.value == 100);
let printEach = () => {
    checkBoxes.forEach((ch) => console.log(ch.checked));
    leversInp.forEach((ch) => console.log(ch.value));
}

let setLaunchDisabled = () => {
    printEach();
    if (checkIsAllMaxed() && checkIsAllChecked()) {
        console.log('every');
        launchBtn.disabled = false;
        launchBtn.style.pointerEvents = "all";
    } else {
        console.log('not every');
        launchBtn.disabled = true;
        launchBtn.style.pointerEvents = "none";
    }
    console.log('some changed');
};

let okBtnClick = function (){
    if(passInput.value === password) {
        checkBoxes.forEach((ch) => {
            ch.disabled = false;
            ch.addEventListener('click', setLaunchDisabled);
        });
        leversInp.forEach((ls) => {
            ls.disabled = false;
            ls.addEventListener('change', setLaunchDisabled);
        });
        passInput.disabled = true;
        okBtn.disabled = true;
        okBtn.style.pointerEvents = "none";
    }
}


// okBtn.addEventListener('click', function (){
//     if(passInput.value === password) {
//         checkBoxes.forEach((ch) => {
//             ch.disabled = false;
//             ch.addEventListener('click', setLaunchDisabled);
//         });
//         leversInp.forEach((ls) => {
//             ls.disabled = false;
//             ls.addEventListener('change', setLaunchDisabled);
//         });
//         passInput.disabled = true;
//         okBtn.disabled = true;
//         okBtn.style.pointerEvents = "none";
//     }
// });


let rocket = document.querySelector('.rocket');
let speed = 10;
let ang = 22.5;
let rad = ang * Math.PI / 180;
let curTime = 0;
let moveRocket = () => {
    curTime++;
    let y = -curTime * speed * Math.cos(rad);
    let x = curTime * speed * Math.sin(rad);
    console.log(x);
    console.log(y);
    rocket.style.transform = `translate(${x}px, ${y}px) rotate(${ang}deg)`;
}

launchBtn.addEventListener('click', function () {
    setInterval(moveRocket, 100);
});


