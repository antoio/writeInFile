// create message class with properties and methods
// export message class to be used as model

const message = {
	title: "",
	date: new Date(Date.now()).toDateString(),
	author: "",
	body: "",
	priority: 0
}

module.exports = message;