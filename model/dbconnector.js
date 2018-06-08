const os = require('os');
const fs = require('fs');

const dbconnector = {
	filename: '',

	write: function(filename, message) {
		let file = `${filename}.txt`;

		fs.open(file, 'w', (error, filedescriptor) => {
			if(error) {
				throw error;
			}

			console.log(`'${file}' was opened.`);
			
			fs.write(filedescriptor, message, (error, written, buffer) => {
				if(error) {
					throw error
				}
		
				console.log(`'${message}' was written.`);
			});

			fs.close(filedescriptor, (error) => {
				if(error) {
					throw error;
				}

				console.log(`${file} was closed and ${message.length} characters were written.`);
			});
		});

		return "All, done!";
	},

	create: function(message) {
		return this.write(this.filename, message + os.EOL);
	},
}

module.exports = dbconnector;