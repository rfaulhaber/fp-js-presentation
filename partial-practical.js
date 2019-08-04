const button = document.getElementById('button');

// button.addEventListener('click', updateText('hello world', ???));

function updateText(text, event) {
	event.target.innerText = text;
}

const updateTextPartial = partial(updateText, 'hello world');

button.addEventListener('click', updateTextPartial);

function updateText(text) {
	return function(event) {
		event.target.innerText = text;
	};
}

const updateTextArrow = text => event => {
	event.target.innerText = text;
};
