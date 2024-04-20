'use client'

import { useRef, useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function Map() {
	const mapRef = useRef(null)

	useEffect(() => {
		const initializeMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
				version: 'quarterly',
			})

			const { Map } = await loader.importLibrary('maps')

			const locationInMap = {
				lat: 46.9326163,
				lng: 25.0792129,
			}

			const { Marker } = await loader.importLibrary('marker')

			const options = {
				center: locationInMap,
				zoom: 8,
				mapId: 'pensiunea_denisa',
			}

			const map = new Map(mapRef.current, options)
			const marker = new Marker({
				position: locationInMap,
				map,
			})
		}

		initializeMap()
	}, [])

	return (
		<div
			className="w-full md:w-1/2 mx-auto aspect-[4/3]"
			ref={mapRef}
		></div>
	)
}
