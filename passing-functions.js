const myCallback = message => {
    console.log(`from longRunningFunc: ${message}`);
};

const longRunningFunc = callback => {
    setTimeout(() => callback('this function has finished!'), 2000);
};

longRunningFunc(myCallback);
