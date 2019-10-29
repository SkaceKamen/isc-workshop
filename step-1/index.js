class MyApp {
	constructor() {
		// My awesome list of buttons
		this.buttons = ['Hi', 'This', 'is', 'fun']
	}

	onReady() {
		// Load application container
		this.element = document.getElementById('app')

		// Create my buttons
		this.buttons.forEach(title => {
			const button = document.createElement('button')
			button.innerText = title
			this.element.appendChild(button)
		})
	}
}

// Start the application when the window is loaded
const app = new MyApp()
window.addEventListener('load', () => app.onReady(), false)
