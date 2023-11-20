import React, { memo, useCallback, useId } from 'react'
import { cx } from 'class-variance-authority'

import { Textfield } from '@swc-react/textfield'
import { FieldLabel } from '@swc-react/field-label'
import { Picker } from '@swc-react/picker'
import { MenuItem } from '@swc-react/menu'

import { languages, type LanguageEnum } from '@/constants'

import styles from './TextFieldset.module.pcss'

type TextFieldsetType = {
	text: string
	setText: (value: string) => void
	language: LanguageEnum | undefined
	setLanguage: (value: LanguageEnum) => void
}

function TextFieldset({ text, setText, language, setLanguage }: TextFieldsetType) {
	const labelId = useId()
	const textChangeHandler = useCallback(
		(e: Event) => {
			const target = e.target as HTMLTextAreaElement

			if (!target) return

			setText(target.value)

			window.gtag('event', 'text_change', {
				event_category: 'Text',
				event_label: target.value,
			})
		},
		[setText],
	)

	const languageChangeHandler = useCallback(
		(e: Event) => {
			const target = e.target as HTMLTextAreaElement

			if (!target) return

			setLanguage(target.value as LanguageEnum)

			window.gtag('event', 'language_change', {
				event_category: 'Language',
				event_label: target.value,
			})
		},
		[setLanguage],
	)

	return (
		<fieldset className={styles.textFieldset}>
			<legend
				className={cx(
					styles.textFieldset__title,
					'spectrum-Heading',
					'spectrum-Heading--sizeXS',
				)}
			>
				What should they say?
			</legend>
			<Textfield
				className={styles.textFieldset__textfield}
				value={text}
				change={textChangeHandler}
				maxlength={200}
				rows={10}
				multiline
			/>
			<FieldLabel for={labelId}>Select language:</FieldLabel>
			<Picker
				className={styles.textFieldset__picker}
				id={labelId}
				value={language}
				change={languageChangeHandler}
			>
				{languages.map(({ value, label }) => (
					<MenuItem key={value} value={value}>
						{label}
					</MenuItem>
				))}
			</Picker>
		</fieldset>
	)
}

export default memo(TextFieldset)
