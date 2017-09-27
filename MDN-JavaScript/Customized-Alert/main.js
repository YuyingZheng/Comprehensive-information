function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');
    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);
    var msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);
    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);
    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
    switch (msgType) {
        case 'warning':
            msg.style.backgroundImage = 'url(icons/warning.png)';
            panel.style.backgroundColor = 'red';
            break;
        case 'chat':
            msg.style.backgroundImage = 'url(icons/chat.png)';
            panel.style.backgroundColor = 'aqua';
            break;
        default:
            msg.style.paddingLeft = '20px';

    }
}