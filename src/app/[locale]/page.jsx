import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import HomePage from '@/components/HomePage'
import Hero from '@/components/Hero'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import HomeHero from '@/components/HomeHero'

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: t('title'),
	}
}

export default function Home({ params: { locale } }) {
	unstable_setRequestLocale(locale)
	const t = useTranslations('Index')
	return (
		<>
			<HomeHero />
			<div className="h-96"></div>
		</>
	)
}
