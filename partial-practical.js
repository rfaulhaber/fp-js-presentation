const button = document.getElementById('button');

button.addEventListener('click', function(event) {
    console.log('I was clicked but I have no context!');
});

function changeTextOnClickIdeal(text, event) {
    event.target.innerText = text;
}

function changeTextOnClick(text) {
    return function(event) {
        event.target.innerText = text;
    };
}

// .. elsewhere

document.addEventListener('click', changeTextOnClick('hello!'));
