
let messages = require('./messages');

module.exports = function(redT) {
	redT.telegram.on('message', (msg) => {
		messages(redT, msg);
	});
}
