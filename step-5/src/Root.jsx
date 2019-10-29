import React from 'react'
import { Provider } from 'react-redux'
import { App } from './components/App'
import { store } from './store/index'

export const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
)
