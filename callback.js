function delayByTwoSeconds(callback) {
	setTimeout(function() {
		callback('done!');
	}, 2000);
}

function myCallback(result) {
	console.log('result was: ', result);
}

delayByTwoSeconds(myCallback);
// => prints 'result was: done' after 2 seconds
