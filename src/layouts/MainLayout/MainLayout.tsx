import React, { useState } from 'react'
import { cx } from 'class-variance-authority'
import { Button } from '@swc-react/button'

import { AvatarPicker, TextFieldset, VoicePicker } from '@/widgets'

import styles from './MainLayout.module.pcss'

function MainLayout() {
	const [avatar, setAvatar] = useState<string | undefined>()
	const [text, setText] = useState<string>('')
	const [language, setLanguage] = useState<string | undefined>()
	const [voice, setVoice] = useState<string | undefined>()

	return (
		<div className={styles.container}>
			<h1 className={cx(styles.title, 'spectrum-Heading', 'spectrum-Heading--sizeM')}>
				Avatars
			</h1>
			<div className={styles.sections}>
				<AvatarPicker name="avatar" avatar={avatar} setAvatar={setAvatar} />
				<TextFieldset
					text={text}
					setText={setText}
					language={language}
					setLanguage={setLanguage}
				/>
				<VoicePicker name="voice" voice={voice} setVoice={setVoice} />
				<Button>Click me</Button>
			</div>
		</div>
	)
}

export default MainLayout
