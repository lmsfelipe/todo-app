import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription, search, add, clear } from './todoActions'
import IconButton from './iconButton'

class TodoForm extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.search()
	}

	render(){
		const { add, description, search } = this.props
		return(
			<div>
				<div role='form' className='todoForm'>
					<div className='col-xs-9'>
						<input id='description' className='form-control' 
							placeholder='Adicione uma tarefa'
							value={this.props.description}
							onChange={this.props.changeDescription}>
						</input>
					</div>
				</div>

				<div className='col-xs-3'>
					<IconButton
						onClick={ () => add(description) }
						style='primary'
						icon='plus'
					/>
					<IconButton
						onClick={ () => search(description) }
						style='info'
						icon='search'
					/>
					<IconButton
						onClick={this.props.clear}
						style='danger'
						icon='remove'
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ 
	changeDescription, 
	search,
	add,
	clear
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)