import Header from './Header'
import pick from 'lodash/pick'
import { useMessages } from 'next-intl'

export default function HeaderWrapper() {
	const messages = useMessages()

	return (
		<header className="relative header-blur">
			<Header
				messages={
					// … and provide the relevant messages
					pick(messages, 'Navigation')
				}
			/>
		</header>
	)
}
