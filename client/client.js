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
const socket = new WebSocket('ws://localhost:8080');
socket.addEventListener('open', function() {
    addNotification("Connected!");
});

socket.addEventListener('close', function() {
    addNotification("Connection Closed!");
});

socket.addEventListener('message', function (msg) {
    const data = JSON.parse(msg.data);
    addMessage(data.color, data.name, data.text);
})

submitButton.addEventListener('click', function(e) {
    console.log(nameInput.value);
    socket.send(JSON.stringify({
        name: nameInput.value || "Unknown User",
        text: msgInput.value || "",
    }));
})