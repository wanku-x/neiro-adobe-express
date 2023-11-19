import React, { memo } from 'react'
import { cx } from 'class-variance-authority'

import { RadioCard } from '@/components'

import { avatars } from '@/constants'

import styles from './AvatarPicker.module.pcss'

type AvatarPickerType = {
	name: string
	avatar?: string
	setAvatar: (value: string) => void
}

function AvatarPicker({ name, avatar, setAvatar }: AvatarPickerType) {
	return (
		<fieldset className={styles.avatarPicker}>
			<legend
				className={cx(
					styles.avatarPicker__title,
					'spectrum-Heading',
					'spectrum-Heading--sizeXS',
				)}
			>
				Pick avatar
			</legend>
			<div className={styles.avatarPicker__grid}>
				{avatars.map(({ value, src, alt }) => (
					<RadioCard
						key={value}
						name={name}
						value={value}
						checked={avatar === value}
						src={src}
						alt={alt}
						onChange={setAvatar}
					/>
				))}
			</div>
		</fieldset>
	)
}

export default memo(AvatarPicker)
