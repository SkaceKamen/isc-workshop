import React from 'react'

export const Task = ({ task, index, onRemove }) => (
	<div>
		{task}
		<button onClick={() => onRemove(index)}>Remove</button>
	</div>
)
