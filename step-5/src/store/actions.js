export function addTask(text) {
	return {
		type: 'ADD_TODO',
		text
	}
}

export function removeTask(id) {
	return {
		type: 'REMOVE_TODO',
		id
	}
}

export function editTask(id, text) {
	return {
		type: 'EDIT_TODO',
		id,
		text
	}
}
