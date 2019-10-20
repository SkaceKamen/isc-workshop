import React from 'react'
import { Task } from './Task'

export const App = () => {
	const [task, setTask] = React.useState('')
	const [tasks, setTasks] = React.useState([])

	const handleInput = e => {
		setTask(e.target.value)
	}

	const handleAddTask = () => {
		if (task) {
			setTasks([...tasks, task])
			setTask('')
		}
	}

	const handleRemoveTask = index => {
		setTasks(tasks.filter((t, i) => i !== index))
	}

	return (
		<div className="app">
			<input type="text" onChange={handleInput} value={task} />
			<button onClick={handleAddTask}>Add task</button>
			<div className="list">
				{tasks.map((task, index) => (
					<Task
						key={index}
						index={index}
						task={task}
						onRemove={handleRemoveTask}
					/>
				))}
			</div>
		</div>
	)
}
