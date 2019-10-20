class MyApp {
	constructor() {
		// My awesome list of buttons
		this.tasks = []
	}

	onReady() {
		// Load application container
		this.element = document.getElementById('app')

		// Render basic layout
		this.render()
	}

	addTask() {
		const name = this.input.value

		if (name) {
			// Save the task
			this.tasks.push(name)
			// Create element for it
			this.list.appendChild(this.renderTask(name))

			// Reset user input
			this.input.value = ''
		}
	}

	/**
	 * Renders single task item - used in two diferent places
	 * @param {string} task
	 */
	renderTask(task) {
		const element = document.createElement('div')
		element.innerHTML = task
		return element
	}

	render() {
		// Create user input
		this.input = document.createElement('input')
		this.input.type = 'text'

		// Create button that will add the task
		const addButton = document.createElement('button')
		addButton.innerText = 'Add task'
		addButton.onclick = () => this.addTask()

		// Create list of tasks
		this.list = document.createElement('div')
		this.list.className = 'list'

		this.tasks.forEach(task => {
			this.list.appendChild(this.renderTask(task))
		})

		// Add everything we created to the container element
		this.element.appendChild(this.input)
		this.element.appendChild(addButton)
		this.element.appendChild(this.list)
	}
}

// Start the application when the window is loaded
const app = new MyApp()
window.addEventListener('load', () => app.onReady(), false)
