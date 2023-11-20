import '@spectrum-web-components/styles/typography.css'
import '@spectrum-web-components/theme/express/scale-medium.js'
import '@spectrum-web-components/theme/express/theme-light.js'
import '@/styles/global.pcss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app'

import addOnUISdk from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js'

addOnUISdk.ready
	.then(() => {
		const rootElement = document.getElementById('root')

		if (rootElement === null) throw new Error('Root element not found')

		const root = createRoot(rootElement)
		root.render(<App addOnUISdk={addOnUISdk} />)
	})
	.catch((err) => {
		console.error(err)
	})
