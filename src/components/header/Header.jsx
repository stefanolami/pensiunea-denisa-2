'use client'

import { Link } from '../../navigation'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header(messages) {
	const navTrans = messages?.messages?.Navigation
	const { scrollY } = useScroll()

	const [hidden, setHidden] = useState(false)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 200) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	return (
		<motion.div
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' },
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.4, ease: 'easeInOut' }}
			className="fixed top-0 w-full bg-transparent text-white z-50 md:px-10 md:py-4 xl:px-28 xl:py-7 flex justify-between items-center"
		>
			<Link
				className="pl-6 md:pl-0"
				href="/"
			>
				{navTrans.home}
			</Link>
			<div className="flex items-center justify-end">
				<DesktopNav messages={navTrans} />
				<MobileNav messages={navTrans} />
			</div>
		</motion.div>
	)
}

{
	/* <div className="flex px-16 py-6 flex-row justify-between items-center">
			<Link href="/">{navTrans.home}</Link>
			<nav className="flex flex-row justify-center items-center gap-4">
				<Link href="/about">{navTrans.about}</Link>
				<Link href="/prices">{navTrans.prices}</Link>
				<Link href="/deals">{navTrans.deals}</Link>
				<Link href="/gallery">{navTrans.gallery}</Link>
				<Link href="/contacts">{navTrans.contacts}</Link>
			</nav>
		</div> */
}
