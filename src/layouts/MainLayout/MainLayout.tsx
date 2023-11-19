import React, { useState } from 'react'
import { cx } from 'class-variance-authority'
import { Button } from '@swc-react/button'

import { AvatarPicker } from '@/widgets'

import styles from './MainLayout.module.pcss'

function MainLayout() {
	const [avatar, setAvatar] = useState<string | undefined>()

	return (
		<div className={styles.container}>
			<h1 className={cx(styles.title, 'spectrum-Heading', 'spectrum-Heading--sizeM')}>
				Avatars
			</h1>
			<AvatarPicker name="avatar" currentValue={avatar} setValue={setAvatar} />
			<h2 className="spectrum-Heading spectrum-Heading--sizeXS">Choose voice</h2>
			<Button>Click me</Button>
		</div>
	)
}

export default MainLayout
