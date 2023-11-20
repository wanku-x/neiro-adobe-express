import { Theme } from '@swc-react/theme'

import React, { createContext } from 'react'
import { MainLayout } from '@/layouts'

import { type AddOnSDKAPI } from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js'

export const AddOnSdkContext = createContext<AddOnSDKAPI | undefined>(undefined)
export type AddOnSdkType = AddOnSDKAPI

const App = ({ addOnUISdk }: { addOnUISdk: AddOnSDKAPI }) => {
	return (
		<AddOnSdkContext.Provider value={addOnUISdk}>
			<Theme
				theme="express"
				scale="medium"
				color="light"
				lang="en"
				style={{ position: 'relative' }}
			>
				<MainLayout />
			</Theme>
		</AddOnSdkContext.Provider>
	)
}

export default App
