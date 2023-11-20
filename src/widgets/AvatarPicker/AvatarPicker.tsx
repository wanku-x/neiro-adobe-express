import React, { memo, useCallback } from 'react'
import { cx } from 'class-variance-authority'

import { RadioCard } from '@/components'

import { avatars, type AvatarEnum } from '@/constants'
import styles from './AvatarPicker.module.pcss'

type AvatarPickerType = {
	name: string
	avatar?: AvatarEnum
	setAvatar: (value: AvatarEnum) => void
}

function AvatarPicker({ name, avatar, setAvatar }: AvatarPickerType) {
	const handlePickAvatar = useCallback(
		(value: string) => {
			setAvatar(value as AvatarEnum)

			window.gtag('event', 'select_avatar', {
				event_category: 'Avatar',
				event_label: value,
			})
		},
		[setAvatar],
	)

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
						onChange={handlePickAvatar}
					/>
				))}
			</div>
		</fieldset>
	)
}

export default memo(AvatarPicker)
