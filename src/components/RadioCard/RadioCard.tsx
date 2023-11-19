import React, { memo } from 'react'

import styles from './RadioCard.module.pcss'

type RadioCardType = {
	name: string
	value: string
	checked: boolean
	src: string
	alt: string
	onChange: (value: string) => void
}

function RadioCard({ name, value, checked, src, alt, onChange: setValue }: RadioCardType) {
	return (
		<label className={styles.radioCard}>
			<input
				className={styles.radioCard__input}
				type="radio"
				name={name}
				value={value}
				checked={checked}
				onChange={() => {
					setValue(value)
				}}
			/>
			<div className={styles.radioCard__overlay} />
			<img className={styles.radioCard__image} src={src} alt={alt} />
		</label>
	)
}

export default memo(RadioCard)
