import { token, type AvatarEnum } from '@/constants'
import { v4 as uuidv4 } from 'uuid'

export type LipsyncAvatarsPayloadType = {
	avatar: AvatarEnum
	ttsUrl: string
}

export const lipsyncAvatarsUrl = 'https://gateway.neiro.ai/v1/lipsync-avatars'

export const lipsyncAvatarsPost = async (
	url: string,
	{ arg }: { arg: LipsyncAvatarsPayloadType },
) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			ID: uuidv4(),
			token,
			audio: {
				format: 'URL',
				url: arg.ttsUrl,
			},
			avatar_name: arg.avatar,
			background: {
				format: 'PICTURE_URL',
				url: 'https://storage.googleapis.com/gateway-prod/stupid_background.png',
			},
			direct_download_result: false,
		}),
	})

	if (!res.ok) {
		const error = new Error('An error occurred while fetching lypsync-avatars.')
		throw error
	}

	return res.json()
}
