const nameInput = document.getElementById('name-input');
const msgInput = document.getElementById('msg-input');
const submitButton = document.getElementById('submit-button');
const output = document.getElementById('text-box');

function addNotification(msg) {
    const element =  `<p class="has-text-weight-semibold">${msg}</p>`;
    output.insertAdjacentHTML('beforeend', element);
}

function addMessage(color, name, msg) {
    const element = `<p><b style="color:hsl(${color}, 50%, 50%)">${name}: </b>${msg}</p>`;
    output.insertAdjacentHTML('beforeend', element);
}


// Your code here
