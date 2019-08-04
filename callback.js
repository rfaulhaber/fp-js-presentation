const longRunningEvent = callback => {
	setTimeout(() => {
		callback('done');
	}, 2000);
};

const myCallback = result => {
	console.log('message was: ', result);
};

longRunningEvent(callback);
// => prints 'message was: done' after 2 seconds
