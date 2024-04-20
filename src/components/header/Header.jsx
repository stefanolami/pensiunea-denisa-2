'use client'

import { Link } from '../../navigation'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/utils/cn'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header(messages) {
	const navTrans = messages?.messages?.Navigation
	const { scrollY } = useScroll()

	const [hidden, setHidden] = useState(false)
	const [changeHeader, setChangeHeader] = useState(false)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 200) {
			setHidden(true)
		} else {
			setHidden(false)
		}
		if (scrollY.get() > 650) {
			setChangeHeader(true)
		} else {
			setChangeHeader(false)
		}
	})

	return (
		<motion.div
			/* variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' },
			}}
			animate={hidden ? 'hidden' : 'visible'} */
			variants={{
				visible: {
					y: 0,
					backgroundColor: '#FFFFFF00',
					color: '#fff',
				},
				hidden: {
					y: '-100%',
					backgroundColor: '#FFFFFF00',
					color: '#fff',
				},
				visibleChanged: {
					y: 0,
					backgroundColor: '#EFEBE5',
					color: '#623E2A',
				},
				hiddenChanged: {
					y: '-100%',
					backgroundColor: '#EFEBE5',
					color: '#623E2A',
				},
			}}
			animate={
				hidden
					? changeHeader
						? 'hiddenChanged'
						: 'hidden'
					: changeHeader
					? 'visibleChanged'
					: 'visible'
			}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className={cn(
				'fixed top-0 w-full bg-transparent text-white z-50 md:px-10 xl:px-28  flex justify-between items-center h-20',
				!changeHeader && 'md:header-blur'
			)}
		>
			<Link
				className="pl-6 md:pl-0 md:py-4 xl:py-7"
				href="/"
			>
				{navTrans.home}
			</Link>

			<DesktopNav
				messages={navTrans}
				changed={changeHeader}
			/>
			<MobileNav messages={navTrans} />
		</motion.div>
	)
}
