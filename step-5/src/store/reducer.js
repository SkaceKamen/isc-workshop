const todos = (
	state = {
		items: [],
		user: null,
		selectedItem: null
	},
	action
) => {
	switch (action.type) {
		case 'ADD_TODO': {
			return {
				...state,
				items: [
					...state.items,
					{ id: Math.max(...state.items.map(t => t.id)) + 1, text: action.text }
				]
			}
		}
		default:
			return state
	}
}

export default todos
