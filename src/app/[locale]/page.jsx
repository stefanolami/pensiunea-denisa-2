import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

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
	return <h1>{t('title')}</h1>
}