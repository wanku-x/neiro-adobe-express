export type AvatarType = {
	value: string
	src: string
	alt: string
}

export const avatars: AvatarType[] = [
	{
		value: 'sofia',
		src: 'https://storage.googleapis.com/gateway-prod/avatars/Sofia-image.webp',
		alt: 'sofia',
	},
	{
		value: 'egor',
		src: 'https://storage.googleapis.com/gateway-prod/avatars/Egor-image.webp',
		alt: 'egor',
	},
	{
		value: 'sharon',
		src: 'https://storage.googleapis.com/gateway-prod/sharon_poster.jpg',
		alt: 'sharon',
	},
	{
		value: 'asya',
		src: 'https://storage.googleapis.com/gateway-prod/avatars/Asya-image.webp',
		alt: 'asya',
	},
	{
		value: 'tattoo_man',
		src: 'https://storage.googleapis.com/gateway-prod/avatars/tattoo_man-image.webp',
		alt: 'tattoo_man',
	},
	{
		value: 'slava',
		src: 'https://storage.googleapis.com/gateway-prod/avatars/slava_canva.webp',
		alt: 'slava',
	},
	{
		value: 'man',
		src: 'https://storage.googleapis.com/gateway-prod/man_poster.jpg',
		alt: '',
	},
	{
		value: 'wad',
		src: 'https://storage.googleapis.com/gateway-prod/wad_poster.jpg',
		alt: 'man',
	},
	{
		value: 'oleg',
		src: 'https://storage.googleapis.com/gateway-prod/avatars/Oleg-image.webp',
		alt: 'oleg',
	},
]

export type LanguageType = {
	value: string
	label: string
}

export const languages: LanguageType[] = [
	{
		value: 'EN',
		label: '🇺🇸 English',
	},
	{
		value: 'PT-BR',
		label: '🇵🇹 Portuguese',
	},
	{
		value: 'ES-ES',
		label: '🇪🇸 Spanish',
	},
	{
		value: 'ID-ID',
		label: '🇮🇩 Indonesian',
	},
	{
		value: 'FR-FR',
		label: '🇫🇷 French',
	},
	{
		value: 'AR-AE',
		label: '🇸🇦 Arabic',
	},
]
