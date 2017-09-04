import React, { Component } from 'react'

import TodoList from './todoList'
import TodoForm from './todoForm'

export default class Todo extends Component {
	render(){
		return (
			<div>
				<h1>Todo</h1>
				<TodoForm />
				<TodoList />
			</div>
		)
	}
}