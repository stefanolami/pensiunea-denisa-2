/* import Navbar from './Navbar'
import { useTranslations } from 'next-intl'

export default function Header() {
	const t = useTranslations('Navigation')
	const translations = [
		t('home'),
		t('about'),
		t('prices'),
		t('deals'),
		t('gallery'),
		t('contacts'),
	]
	return (
		<header className="bg-white text-black mx-auto w-1/2">
			<Navbar translations={translations} />
		</header>
	)
} */

import Navbar from './Header'
import pick from 'lodash/pick'
import { NextIntlClientProvider, useMessages } from 'next-intl'

export default function Header() {
	const messages = useMessages()

	return (
		<header className="bg-white text-black mx-auto w-1/2">
			<Navbar
				messages={
					// … and provide the relevant messages
					pick(messages, 'Navigation')
				}
			/>
		</header>
	)
}
