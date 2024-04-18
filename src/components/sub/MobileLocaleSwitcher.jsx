'use client'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { useRouter, usePathname } from '@/navigation'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function MobileLocaleSwitcher() {
	const icons = ['/romania.png', '/uk.png']
	const romaniaIcon = icons[0]
	const ukIcon = icons[1]
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const pathname = usePathname()
	const params = useParams()
	const locale = useLocale()

	function changeLocale(event) {
		const nextLocale = event.target.id
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale })
		})
	}

	const getStyle = () => {
		if (locale === 'ro') {
			return {
				left: '0',
				borderRadius: '6px 0 0 6px',
			}
		} else {
			return {
				right: '0',
				borderRadius: '0 6px 6px 0',
			}
		}
	}

	return (
		<div className="relative grid grid-cols-2 border border-white/70 rounded-md">
			<div className="py-2 px-[3px]">
				<Image
					onClick={changeLocale}
					src={romaniaIcon}
					id="ro"
					alt="ro"
					width="40"
					height="40"
					className="z-30"
				/>
			</div>
			<div className="py-2 px-[3px]">
				<Image
					onClick={changeLocale}
					src={ukIcon}
					id="en"
					alt="en"
					width="40"
					height="40"
				/>
			</div>
			<span
				className="absolute bg-white/70 w-[46px] h-[46px] -z-10"
				style={getStyle()}
			/>
		</div>
	)
}
