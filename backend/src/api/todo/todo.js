const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
	description: { type: String, requered: true },
	done: { type: Boolean, requered: true, default: false },
	createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)