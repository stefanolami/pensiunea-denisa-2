import { Link } from '../../navigation'
import { cn } from '@/utils/cn'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages, changed }) {
	const links = ['about', 'prices', 'deals', 'gallery', 'contacts']
	return (
		<div className="hidden md:flex flex-row justify-between items-center gap-16 h-full">
			<nav className="grid grid-cols-5 text-center uppercase h-full *:px-5">
				{links.map((link) => {
					return (
						<Link
							className={cn(
								'hover:scale-110 flex items-center justify-center hover:bg-[#FFFFFF40] hover:shadow-md',
								changed && 'hover:bg-beige3'
							)}
							href={`/${link}`}
							key={link}
						>
							{messages[link]}
						</Link>
					)
				})}
				{/* <Link
					className={cn(
						'hover:scale-110 flex items-center justify-center',
						changed && 'hover:bg-beige3'
					)}
					href="/about"
				>
					{messages.about}
				</Link>

				<Link
					className={cn(
						'hover:scale-110 flex items-center justify-center',
						changed && 'hover:bg-beige3'
					)}
					href="/prices"
				>
					{messages.prices}
				</Link>
				<Link
					className={cn(
						'hover:scale-110 flex items-center justify-center',
						changed && 'hover:bg-beige3'
					)}
					href="/deals"
				>
					{messages.deals}
				</Link>
				<Link
					className={cn(
						'hover:scale-110 flex items-center justify-center',
						changed && 'hover:bg-beige3'
					)}
					href="/gallery"
				>
					{messages.gallery}
				</Link>
				<Link
					className={cn(
						'hover:scale-110 flex items-center justify-center',
						changed && 'hover:bg-beige3'
					)}
					href="/contacts"
				>
					{messages.contacts}
				</Link> */}
			</nav>
			<DesktopLocaleSwitcher />
		</div>
	)
}

/* const NavLink = ({ linkName, changed, messages }) => {
	return (
		<Link
			className={cn(
				'hover:scale-110 flex items-center justify-center',
				changed && 'hover:bg-beige3'
			)}
			href={`/${linkName}`}
		>
			{messages.linkName}
		</Link>
	)
} */
