import React, { memo } from 'react'
import { cx } from 'class-variance-authority'

import { RadioCard } from '@/components'

import { voices } from '@/constants'

import styles from './VoicePicker.module.pcss'

type VoicePickerType = {
	name: string
	voice?: string
	setVoice: (value: string) => void
}

function VoicePicker({ name, voice, setVoice }: VoicePickerType) {
	return (
		<fieldset className={styles.voicePicker}>
			<legend
				className={cx(
					styles.voicePicker__title,
					'spectrum-Heading',
					'spectrum-Heading--sizeXS',
				)}
			>
				Choose voice
			</legend>
			<div className={styles.voicePicker__grid}>
				{voices.map(({ value, src, alt }) => (
					<RadioCard
						key={value}
						name={name}
						value={value}
						checked={voice === value}
						src={src}
						alt={alt}
						onChange={setVoice}
					/>
				))}
			</div>
		</fieldset>
	)
}

export default memo(VoicePicker)
