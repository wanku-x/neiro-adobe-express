import { type MutationFetcher } from 'swr/mutation'
import { token, type LanguageEnum, type VoiceEnum } from '@/constants'
import { v4 as uuidv4 } from 'uuid'

export type TtsPayloadType = {
	text: string
	language: LanguageEnum
	voice: VoiceEnum
}

export type TtsResponseType = {
	ID: string
	statusCode: string
	errorMessage: string
	audio?: {
		id: string
		format: string
		url: string
	}
}

export const ttsUrl = 'https://gateway.neiro.ai/v4/tts'

export const ttsPost: MutationFetcher<TtsResponseType, string, TtsPayloadType> = async (
	url,
	{ arg },
) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			ID: uuidv4(),
			token,
			speaker: arg.voice,
			text: arg.text,
			language: arg.language,
			format: 'URL',
		}),
	})

	if (!res.ok) {
		const error = new Error('An error occurred while fetching tts.')
		throw error
	}

	return res.json()
}
