import { Theme } from '@swc-react/theme'

import React from 'react'
import { MainLayout } from '@/layouts'

import { type AddOnSDKAPI } from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js'

const App = ({ addOnUISdk }: { addOnUISdk: AddOnSDKAPI }) => {
	return (
		<Theme theme="express" scale="medium" color="light" lang="en">
			<MainLayout />
		</Theme>
	)
}

export default App
