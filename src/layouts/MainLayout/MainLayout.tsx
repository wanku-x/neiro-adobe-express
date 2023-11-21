import React, { useCallback, useState } from 'react'
import cx from 'clsx'
import useSWRMutation from 'swr/mutation'

import { Button } from '@swc-react/button'

import { AvatarPicker, ResultVideo, TextFieldset, VoicePicker } from '@/widgets'
import { ttsPost, ttsUrl, lipsyncAvatarsPost, lipsyncAvatarsUrl } from '@/api'
import { type AvatarEnum, type LanguageEnum, type VoiceEnum } from '@/constants'

import styles from './MainLayout.module.pcss'

function MainLayout() {
	const [avatar, setAvatar] = useState<AvatarEnum | undefined>()
	const [text, setText] = useState<string>('')
	const [language, setLanguage] = useState<LanguageEnum | undefined>()
	const [voice, setVoice] = useState<VoiceEnum | undefined>()
	const [error, setError] = useState<string>('')

	const {
		error: ttsError,
		isMutating: ttsIsMutating,
		trigger: ttsTrigger,
		reset: ttsReset,
	} = useSWRMutation(ttsUrl, ttsPost)

	const {
		data,
		error: lipsyncAvatarsError,
		isMutating: lipsyncAvatarsIsMutating,
		trigger: lipsyncAvatarsTrigger,
		reset: lipsyncAvatarsReset,
	} = useSWRMutation(lipsyncAvatarsUrl, lipsyncAvatarsPost)

	const generateVideo = useCallback(async () => {
		try {
			if (avatar && text && language && voice) {
				ttsReset()
				lipsyncAvatarsReset()
				setError('')

				const ttsResponse = await ttsTrigger({ text, language, voice })

				if (ttsResponse.errorMessage || !ttsResponse.audio)
					throw new Error(ttsResponse.errorMessage)

				const lipsyncAvatarsResponse = await lipsyncAvatarsTrigger({
					avatar,
					ttsUrl: ttsResponse.audio.url,
				})

				if (lipsyncAvatarsResponse.errorMessage)
					throw new Error(lipsyncAvatarsResponse.errorMessage)
			}
		} catch (error) {
			setError(error.message as string)
			console.error(error.message)
		}

		gtag('event', 'generate_video', {
			event_category: 'Generate video',
			event_label: 'Generate video clicked',
		})
	}, [avatar, text, language, voice])

	return (
		<>
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
					<ResultVideo
						video={data?.avatarsLipsync?.url}
						loading={ttsIsMutating || lipsyncAvatarsIsMutating}
						error={ttsError || lipsyncAvatarsError || error}
					/>
				</div>
			</div>
			<div className={styles.footer}>
				<Button
					className={styles.footer__button}
					onClick={generateVideo}
					disabled={
						!avatar ||
						!text ||
						!language ||
						!voice ||
						ttsIsMutating ||
						lipsyncAvatarsIsMutating
					}
				>
					Generate
				</Button>
			</div>
		</>
	)
}

export default MainLayout
