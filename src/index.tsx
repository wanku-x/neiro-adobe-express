import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import addOnUISdk from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js'

addOnUISdk.ready.then(() => {
	const rootElement = document.getElementById('root')

	if (rootElement === null) throw new Error('Root element not found')

	const root = createRoot(rootElement)
	root.render(<App addOnUISdk={addOnUISdk} />)
}).catch(err => {
	console.error(err)
})
