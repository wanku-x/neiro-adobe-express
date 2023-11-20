import React, { memo, useCallback } from 'react'
import { cx } from 'class-variance-authority'

import { RadioCard } from '@/components'

import { voices, type VoiceEnum } from '@/constants'

import styles from './VoicePicker.module.pcss'

type VoicePickerType = {
	name: string
	voice?: VoiceEnum
	setVoice: (value: VoiceEnum) => void
}

function VoicePicker({ name, voice, setVoice }: VoicePickerType) {
	const handlePickVoice = useCallback(
		(value: string) => {
			setVoice(value as VoiceEnum)

			window.gtag('event', 'select_voice', {
				event_category: 'Voice',
				event_label: value,
			})
		},
		[setVoice],
	)

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
						onChange={handlePickVoice}
					/>
				))}
			</div>
		</fieldset>
	)
}

export default memo(VoicePicker)
