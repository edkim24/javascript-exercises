const repeatString = function (string, num) {
	if (num < 0) {
		return 'ERROR';
	} else {
		let fullString = '';
		for (let i = 0; i < num; i++) {
			fullString += string;
		}
		return fullString;
	}
};
repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
