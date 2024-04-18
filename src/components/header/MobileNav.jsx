'use client'

import { motion, MotionConfig } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from '../../navigation'
import MobileLocaleSwitcher from './MobileLocaleSwitcher'

export default function MobileNav({ messages }) {
	const [active, setActive] = useState(false)

	useEffect(() => {
		if (active) {
			document.body.classList.add('overflow-y-hidden')
		} else {
			document.body.classList.remove('overflow-y-hidden')
		}
	}, [active])

	return (
		<div className="md:hidden">
			<MotionConfig
				transition={{
					duration: 0.4,
					ease: 'easeInOut',
				}}
			>
				<motion.button
					initial={false}
					onClick={() => setActive((pv) => !pv)}
					className="relative h-16 w-16 rounded-full z-50"
					animate={active ? 'open' : 'closed'}
				>
					<motion.span
						className="absolute h-1 w-8 bg-white"
						style={{
							left: '50%',
							top: '35%',
							x: '-50%',
							y: '-50%',
						}}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								top: ['35%', '50%', '50%'],
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								top: ['50%', '50%', '35%'],
							},
						}}
					/>
					<motion.span
						className="absolute h-1 w-8 bg-white"
						style={{
							left: '50%',
							top: '50%',
							x: '-50%',
							y: '-50%',
						}}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '-45deg'],
							},
							closed: {
								rotate: ['-45deg', '0deg', '0deg'],
							},
						}}
					/>
					<motion.span
						className="absolute h-1 w-4 bg-white"
						style={{
							left: 'calc(50% + 8px)',
							bottom: '35%',
							x: '-50%',
							y: '50%',
						}}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								left: '50%',
								bottom: ['35%', '50%', '50%'],
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								left: 'calc(50% + 8px)',
								bottom: ['50%', '50%', '35%'],
							},
						}}
					/>
				</motion.button>
				<motion.div>
					<motion.div
						className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur flex flex-col justify-around items-center"
						initial={false}
						animate={active ? 'open' : 'closed'}
						variants={{
							open: {
								x: 0,
								opacity: 1,
								pointerEvents: 'auto',
							},
							closed: {
								x: '100%',
								opacity: 0,
								pointerEvents: 'none',
							},
						}}
					>
						<nav className="flex flex-col justify-center gap-4 items-center">
							<Link
								onClick={() => setActive(false)}
								href="/about"
							>
								{messages.about}
							</Link>
							<Link href="/prices">{messages.prices}</Link>
							<Link href="/deals">{messages.deals}</Link>
							<Link href="/gallery">{messages.gallery}</Link>
							<Link href="/contacts">{messages.contacts}</Link>
						</nav>
						<MobileLocaleSwitcher />
					</motion.div>
				</motion.div>
			</MotionConfig>
		</div>
	)
}
