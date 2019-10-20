const e = React.createElement

const Task = ({ task, index, onRemove }) =>
	e(
		'div',
		null,
		task,
		e('button', { onClick: () => onRemove(index) }, 'Remove')
	)

const MyApp = () => {
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

	return e(
		'div',
		{ className: 'app' },
		e('input', {
			type: 'text',
			onChange: handleInput,
			value: task
		}),
		e('button', { onClick: handleAddTask }, 'Add'),
		e(
			'div',
			{ className: 'list' },
			tasks.map((task, index) =>
				e(Task, { key: index, task, index, onRemove: handleRemoveTask })
			)
		)
	)
}

ReactDOM.render(e(MyApp), document.getElementById('app'))
