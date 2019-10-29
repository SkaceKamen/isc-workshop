import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Task } from './Task'
import { addTask } from '../store/actions'

export const App = () => {
	const dispatch = useDispatch()
	const tasks = useSelector(function(state) {
		return state.items
	})

	const [input, setInput] = React.useState('Hello world')

	function handleChange(e) {
		setInput(e.target.value)
	}

	function handleAdd() {
		dispatch(addTask(input))
	}

	function handleRemove(id) {
		setTasks(
			tasks.filter(function(task) {
				return task.id !== id
			})
		)
	}

	function handleSave(id, text) {
		setTasks(
			tasks.map(function(task) {
				if (task.id === id) {
					return { id: id, text: text }
				}
				return task
			})
		)
	}

	return (
		<div>
			<input type="text" onChange={handleChange} value={input} />
			<button onClick={handleAdd}>Add task</button>
			<div className="list">
				{tasks.map(function(task) {
					return (
						<Task
							task={task.text}
							id={task.id}
							key={task.id}
							onSave={handleSave}
							onRemove={handleRemove}
						/>
					)
				})}
			</div>
		</div>
	)
}
