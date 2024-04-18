/* 'use client'

import { Link } from '../navigation'

export default function Navbar({ translations }) {
	return (
		<div className="flex px-16 py-6 flex-row justify-between items-center">
			<Link href="/">{translations[0]}</Link>
			<nav className="flex flex-row justify-center items-center gap-4">
				<Link href="/about">{translations[1]}</Link>
				<Link href="/prices">{translations[2]}</Link>
				<Link href="/deals">{translations[3]}</Link>
				<Link href="/gallery">{translations[4]}</Link>
				<Link href="/contacts">{translations[5]}</Link>
			</nav>
		</div>
	)
} */

'use client'

import { Link } from '../navigation'

export default function Navbar(messages) {
	console.log(messages)
	const navTrans = messages?.messages?.Navigation

	return (
		<div className="flex px-16 py-6 flex-row justify-between items-center">
			<Link href="/">{navTrans.home}</Link>
			<nav className="flex flex-row justify-center items-center gap-4">
				<Link href="/about">{navTrans.about}</Link>
				<Link href="/prices">{navTrans.prices}</Link>
				<Link href="/deals">{navTrans.deals}</Link>
				<Link href="/gallery">{navTrans.gallery}</Link>
				<Link href="/contacts">{navTrans.contacts}</Link>
			</nav>
		</div>
	)
}
