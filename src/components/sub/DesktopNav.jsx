import { Link } from '../../navigation'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages }) {
	return (
		<div className="hidden md:flex flex-row justify-between items-center gap-16">
			<nav className="grid grid-cols-5 gap-4 text-center">
				<Link href="/about">{messages.about}</Link>
				<Link href="/prices">{messages.prices}</Link>
				<Link href="/deals">{messages.deals}</Link>
				<Link href="/gallery">{messages.gallery}</Link>
				<Link href="/contacts">{messages.contacts}</Link>
			</nav>
			<DesktopLocaleSwitcher />
		</div>
	)
}
