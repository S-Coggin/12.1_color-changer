var button = document.querySelector('button');
var paragraph = document.querySelector('p');
var iPurple = true;

button.addEventListener('click', function () {
    if (iPurple) {
        document.body.style.background = ('purple');
    } else {
        document.body.style.background = ('white');
    }
    iPurple = !iPurple;
});