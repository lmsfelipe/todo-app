import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { markAsDone, markAsPending, remove } from './todoActions'

import IconButton from './iconButton'

class TodoList extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const renderRows = () => {
			const list = this.props.list || []
			return list.map(todo => (
				<tr key={todo._id}>
					<td className={ todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
					<td>
						<IconButton
							onClick={() => this.props.remove(todo)}
							style='danger'
							icon='trash-o'
						/>
						<IconButton
							onClick={() => this.props.markAsDone(todo)}
							hide={todo.done}
							style='success'
							icon='check'
						/>
						<IconButton
							onClick={() => this.props.markAsPending(todo)}
							hide={!todo.done}
							style='warning'
							icon='undo'
						/>
					</td>
				</tr>
			))
		}

		return(
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th>Descrição</th>
							<th>Ações</th>
						</tr>
					</thead>	
					<tbody>
						{renderRows()}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({
	markAsDone,
	markAsPending,
	remove
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)