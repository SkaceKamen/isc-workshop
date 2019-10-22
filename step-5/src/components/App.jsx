import React from 'react'
import { Task } from './Task'

export const App = () => {
	const [input, setInput] = React.useState('Hello world')
	const [tasks, setTasks] = React.useState([{ id: 1, text: 'Task 1' }])

	function handleChange(e) {
		setInput(e.target.value)
	}

	function handleAdd() {
		setTasks([
			{ id: Math.max(...tasks.map(t => t.id)) + 1, text: input },
			...tasks
		])
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
