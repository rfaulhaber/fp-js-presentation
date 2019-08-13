function compose(...funcs) {
	return function(...values) {
		let result = funcs.pop()(...values);

		while (funcs.length > 0) {
			result = funcs.pop()(result);
		}

		return result;
	};
}

const splitSentence = sentence => sentence.split(' ');

const unique = list => {
	const uniqList = [];

	for (let v of list) {
		if (uniqList.indexOf(v) === -1) {
			uniqList.push(v);
		}
	}

	return uniqList;
};

const filterWordsContaining = match => words => words.filter(word => !word.includes(match));

const longestWord = words => {
	const longest = words
		.map((word, index) => ({
			index,
			length: word.length
		}))
		.sort((left, right) => right.length - left.length);

	return words[longest[0].index];
};

const longestWordFromSentence = compose(
	longestWord,
	filterWordsContaining('-'),
	unique,
	splitSentence,
);

// equivalent to:
// longestWord(filterWordsContaining('-')(unique(splitSentence(sentence))));

const sentence = `In computer science, functional programming is a programming paradigm—a style 
of building the structure and elements of computer programs—that treats 
computation as the evaluation of mathematical functions and avoids 
changing-state and mutable data. It is a declarative programming paradigm in 
that programming is done with expressions or declarations instead of 
statements. Functional code is idempotent: a function's return value depends 
only on its arguments, so calling a function with the same value for an 
argument always produces the same result. This is in contrast to imperative 
programming where, in addition to a function's arguments, global program state 
can affect a function's resulting value. Eliminating side effects, that is, 
changes in state that do not depend on the function inputs, can make 
understanding a program easier, which is one of the key motivations for the 
development of functional programming.`;

console.log(longestWordFromSentence(sentence));
// => understanding
