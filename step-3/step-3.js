const e = React.createElement

class MyApp extends React.PureComponent {
	// This is the initial "state" of application
	// The application will only react to changes in this dictionary
	state = {
		task: '',
		tasks: []
	}

	handleInput(e) {
		// Whenever user types something, save it our "state"
		// This will call render function with new "state"
		this.setState({ task: e.target.value })
	}

	handleAddTask() {
		if (this.state.task) {
			// Add task to task list and reset user input
			this.setState({
				// We don't use append here, this is intentional
				// Values in state dictionary have to be immutable - everytime something changes
				//   new instance is created
				tasks: [...this.state.tasks, this.state.task],
				task: ''
			})
		}
	}

	handleRemoveTask(index) {
		// This removal is kind of ineffective, but it creates new array instance
		// Which is the best practice
		this.setState({
			tasks: this.state.tasks.filter((t, i) => i !== index)
		})
	}

	renderTask(task, index) {
		// Renders task element - this should be moved to separate component
		// But for clarity, we keep it as a method here
		return e(
			'div',
			{ key: index },
			task,
			e('button', { onClick: () => this.handleRemoveTask(index) }, 'Remove')
		)
	}

	render() {
		// Renders the basic layout, this method is called everytime state changes
		// This only creates the DOM elements on the first call
		// On the subsequent calls, the renderer will only change values that actually changed
		return e(
			'div',
			{ className: 'app' },
			e('input', {
				type: 'text',
				onChange: e => this.handleInput(e),
				value: this.state.task
			}),
			e('button', { onClick: () => this.handleAddTask() }, 'Add'),
			e(
				'div',
				{ className: 'list' },
				this.state.tasks.map((task, index) => this.renderTask(task, index))
			)
		)
	}
}

ReactDOM.render(e(MyApp), document.getElementById('app'))
