import React, { useCallback, useState } from 'react'
import { cx } from 'class-variance-authority'
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
		gtag('event', 'generate_video', {
			event_category: 'Generate video',
			event_label: 'Generate video clicked',
		})

		try {
			if (avatar && text && language && voice) {
				ttsReset()
				lipsyncAvatarsReset()

				const ttsResponse = await ttsTrigger({ text, language, voice })
				const lipsyncAvatarsResponse = await lipsyncAvatarsTrigger({
					avatar,
					ttsUrl: ttsResponse.audio.url,
				})
			}
		} catch (error) {
			console.error(error)
		}
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
						error={ttsError || lipsyncAvatarsError}
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
