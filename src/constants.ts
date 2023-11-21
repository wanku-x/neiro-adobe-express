export const token =
	'ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR2xsYm5RaU9pSjBaWE4wWDJGemMybG5ibTFsYm5SZk1UUmZNVEVpTENKc2FYQnplVzVqWDJGMllYUmhjbk1pT25zaWNuQm9Jam96TUN3aWNuQnRJam94ZlN3aWRIUnpJanA3SW5Kd2FDSTZNVEF3TENKeWNHMGlPak45TENKbGVIQnBjbUYwYVc5dVgzUnpJam94TnpBeE1EUXpNVGs1ZlEuZE96MnFqZ3NhTVlfdk5LS0ZxOWUxSDVLdjZIaDlrZTRCb003ZW9udEhfQQ=='

export enum AvatarEnum {
	Sofia = 'sofia',
	Egor = 'egor',
	Sharon = 'sharon',
	Asya = 'asya',
	TattooMan = 'tattoo_man',
	Slava = 'slava',
	Man = 'man',
	Wad = 'wad',
	Oleg = 'oleg',
}

export type AvatarType = {
	value: AvatarEnum
	src: string
	alt: string
}

export const avatars: AvatarType[] = [
	{
		value: AvatarEnum.Sofia,
		src: 'https://i.ibb.co/4NzqkTb/sofia.jpg',
		alt: 'A fair-skinned woman with straight blond hair, blue eyes, wearing a black blazer over a white top',
	},
	{
		value: AvatarEnum.Egor,
		src: 'https://i.ibb.co/CMCVgdb/egor.jpg',
		alt: 'A man with a light complexion, medium-length wavy brown hair, wearing a black shirt over a beige t-shirt',
	},
	{
		value: AvatarEnum.Sharon,
		src: 'https://i.ibb.co/GVyZKxt/sharon.jpg',
		alt: 'A woman with medium brown skin, long pulled back auburn hair, wearing a black V-neck top',
	},
	{
		value: AvatarEnum.Asya,
		src: 'https://i.ibb.co/0rzJTfH/asya.jpg',
		alt: 'A woman with a light complexion and straight, shoulder-length blonde hair, wearing a dark brown shirt over a light-colored t-shirt',
	},
	{
		value: AvatarEnum.TattooMan,
		src: 'https://i.ibb.co/8YygSsz/tattoo-man.jpg',
		alt: "A man with light skin, short, styled blonde hair, and a visible tattoo on his chest. He's wearing a black blazer without a shirt",
	},
	{
		value: AvatarEnum.Slava,
		src: 'https://i.ibb.co/DYYQ7Wc/slava.jpg',
		alt: 'A man with a light complexion, short brown hair combed to the side, wearing a light beige collared shirt',
	},
	{
		value: AvatarEnum.Man,
		src: 'https://i.ibb.co/s3tLXzr/man.jpg',
		alt: 'A almost bald man with a fair complexion, wearing a light beige round-neck shirt',
	},
	{
		value: AvatarEnum.Wad,
		src: 'https://i.ibb.co/31LFDrS/wad.jpg',
		alt: 'A woman with dark brown skin and long black hair slicked back into a tight style, wearing a dark top',
	},
	{
		value: AvatarEnum.Oleg,
		src: 'https://i.ibb.co/bPhWfVg/oleg.jpg',
		alt: 'A man of medium build with a light complexion and short brown hair, wearing a black crew-neck T-shirt',
	},
]

export enum LanguageEnum {
	EN = 'EN',
	PT_BR = 'PT-BR',
	ES_ES = 'ES-ES',
	ID_ID = 'ID_ID',
	FR_FR = 'FR-FR',
	AR_AE = 'AR-AE',
}

export type LanguageType = {
	value: LanguageEnum
	label: string
}

export const languages: LanguageType[] = [
	{
		value: LanguageEnum.EN,
		label: '🇺🇸 English',
	},
	{
		value: LanguageEnum.PT_BR,
		label: '🇵🇹 Portuguese',
	},
	{
		value: LanguageEnum.ES_ES,
		label: '🇪🇸 Spanish',
	},
	{
		value: LanguageEnum.ID_ID,
		label: '🇮🇩 Indonesian',
	},
	{
		value: LanguageEnum.FR_FR,
		label: '🇫🇷 French',
	},
	{
		value: LanguageEnum.AR_AE,
		label: '🇸🇦 Arabic',
	},
]

export enum VoiceEnum {
	Zendaya = 'zendaya',
	Grande = 'grande',
	Rebecca = 'rebecca',
	Holland = 'holland',
	David = 'david',
}

export type VoiceType = {
	value: VoiceEnum
	src: string
	alt: string
}

export const voices: VoiceType[] = [
	{
		value: VoiceEnum.Zendaya,
		src: 'https://i.ibb.co/KDS34tw/zendaya.jpg',
		alt: 'Zendaya voice',
	},
	{
		value: VoiceEnum.Grande,
		src: 'https://i.ibb.co/J3Z2Lxb/grande.jpg',
		alt: 'Grande voice',
	},
	{
		value: VoiceEnum.Rebecca,
		src: 'https://i.ibb.co/4pbHbr3/rebecca.jpg',
		alt: 'Rebecca voice',
	},
	{
		value: VoiceEnum.Holland,
		src: 'https://i.ibb.co/XXnk5tN/holland.jpg',
		alt: 'Holland voice',
	},
	{
		value: VoiceEnum.David,
		src: 'https://i.ibb.co/XSw8Qvv/david.jpg',
		alt: 'David voice',
	},
]
