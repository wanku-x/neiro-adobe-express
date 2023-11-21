import React, { memo, useContext, useCallback, type SyntheticEvent } from 'react'
import { Asset } from '@swc-react/asset'
import { ProgressCircle } from '@swc-react/progress-circle'
import { Button } from '@swc-react/button'

import { AddOnSdkContext, type AddOnSdkType } from '@/app'
import { getImageBlob } from '@/utils'

import styles from './ResultVideo.module.pcss'

type ResultVideoType = {
	video?: string
	loading: boolean
	error: boolean
}

function ResultVideo({ video, loading, error }: ResultVideoType) {
	const addOnSdk = useContext<AddOnSdkType | undefined>(AddOnSdkContext)

	const handleImageAdd = useCallback(async () => {
		if (!addOnSdk || !video) return

		await getImageBlob(video).then(async (blob) => addOnSdk.app.document.addImage(blob))

		window.gtag('event', 'add_video', {
			event_category: 'Add video',
			event_label: 'Add video clicked',
		})
	}, [video])

	const handleImageDrag = useCallback(
		(event: SyntheticEvent<HTMLVideoElement>) => {
			if (!addOnSdk || !video) return

			addOnSdk.app.enableDragToDocument(event.currentTarget, {
				previewCallback(element: HTMLVideoElement) {
					return new URL(element.currentSrc)
				},
				async completionCallback(element: HTMLVideoElement) {
					const blob = await getImageBlob(element.currentSrc)
					return [{ blob }]
				},
			})
		},
		[video],
	)

	return (
		<div className={styles.resultVideo}>
			<h2 className="spectrum-Heading spectrum-Heading--sizeXS">Your result</h2>
			<div className={styles.resultVideo__wrapper}>
				{video ? (
					<video
						className={styles.resultVideo__media}
						width="1600"
						height="900"
						onLoadedData={handleImageDrag}
						controls
					>
						<source src={video} type="video/mp4" />
					</video>
				) : loading ? (
					<>
						<h3 className="spectrum-Heading spectrum-Heading--sizeXS">
							Bringing your avatar to life!
						</h3>
						<p className="spectrum-Body spectrum-Body--sizeM">
							Please allow 2-5 minutes...
						</p>
						<ProgressCircle size="l" indeterminate />
					</>
				) : error ? (
					<>
						<h3 className="spectrum-Heading spectrum-Heading--sizeXS">
							Something went wrong
						</h3>
						<p className="spectrum-Body spectrum-Body--sizeM">Please try again later</p>
					</>
				) : (
					<Asset variant="file" />
				)}
			</div>
			<Button onClick={handleImageAdd} disabled={!video}>
				{video ? 'Add video to canvas' : 'Video not generated yet'}
			</Button>
		</div>
	)
}

export default memo(ResultVideo)
