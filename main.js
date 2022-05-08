let title = document.createElement('p');
title.className = 'title-keyboard';
title.innerText = 'Virtual Keyboard';
document.body.append(title);

let wrapper = document.createElement('div');
wrapper.id = 'keyboard-wrapper';
document.body.append(wrapper);

let keyboardFrame = document.createElement('div');
keyboardFrame.id = 'keyboard-frame';
wrapper.append(keyboardFrame);

// Input 

let input = document.createElement('input');
input.className = 'input-text';
document.body.append(input);

const keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 13, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
// const keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

// Get keyboard

// document.onkeypress = function(event){
//     // console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }

// Create keyboard

function init() {
    let out = '';
    for(let i = 0; i < keyboard.length; i++){
        if(i == 12 || i == 25 || i == 37){
            out += '<div class="space" ></div>';
        }
        out += '<div class="key" data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('#keyboard-frame').innerHTML = out;
}

init();

// Event

function removeActiveClass() {
    document.querySelectorAll('#keyboard-frame .key').forEach(function(el){
        el.classList.remove('active');
    });
}

function removeAnimation() {
    document.querySelectorAll('#keyboard-frame .key').forEach(function(el){
        el.classList.remove('active-animation');
    });
}

document.onkeypress = function(event) {
    // console.log(event.code); // KeyX
    // console.log(event.keyCode); // 120
    // console.log(event.key) // x
    document.querySelector('#keyboard-frame .key[data="'+event.keyCode+'"]').classList.add('active');
    document.querySelector('#keyboard-frame .key[data="'+event.keyCode+'"]').classList.add('active-animation');
    setTimeout(removeActiveClass, 300);
    setTimeout(removeAnimation, 300);
    let char = event.key;
    input.value = char;
}

document.querySelectorAll('#keyboard-frame .key').forEach(function(el){
    el.onclick = function(event){
        let code = this.getAttribute('data');
        this.classList.add('active');
        this.classList.add('active-animation');
        setTimeout(removeActiveClass, 300);
        setTimeout(removeAnimation, 300);
        // console.log(code);
        // console.log(String.fromCharCode(code));
        let chr = String.fromCharCode(code);
        input.value = chr;
    }
});