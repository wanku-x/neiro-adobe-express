import React, { useState } from 'react'
import { cx } from 'class-variance-authority'
import { Button } from '@swc-react/button'

import { AvatarPicker, TextFieldset } from '@/widgets'

import styles from './MainLayout.module.pcss'

function MainLayout() {
	const [avatar, setAvatar] = useState<string | undefined>()
	const [text, setText] = useState<string>('')
	const [language, setLanguage] = useState<string | undefined>()

	return (
		<div className={styles.container}>
			<h1 className={cx(styles.title, 'spectrum-Heading', 'spectrum-Heading--sizeM')}>
				Avatars
			</h1>
			<AvatarPicker name="avatar" avatar={avatar} setAvatar={setAvatar} />
			<TextFieldset
				text={text}
				setText={setText}
				language={language}
				setLanguage={setLanguage}
			/>
			<h2 className="spectrum-Heading spectrum-Heading--sizeXS">Choose voice</h2>
			<Button>Click me</Button>
		</div>
	)
}

export default MainLayout
