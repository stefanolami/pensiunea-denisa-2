import { ImagesSlider } from '@/components/sub/ImagesSlider'
import { Link } from '@/navigation'

export default function HomeHero() {
	const images = [
		'/pensiune4.jpg',
		'/pensiune2.jpg',
		'/pensiune5.jpg',
		'/pensiune3.jpg',
	]
	return (
		<ImagesSlider
			className="h-[100svh] xl:h-[100vh]"
			images={images}
			direction="up"
		>
			<div className="z-50 flex flex-col justify-center items-center">
				<h1 className="font-bold text-3xl md:text-8xl text-center text-white py-4 mt-28 md:mt-36">
					Pensiunea Denisa
				</h1>
				<h4 className="text-white md:text-2xl mb-20 md:mb-32">
					BINE AȚI VENIT!
				</h4>

				<button className="block text-brown text-xs md:text-lg bg-white py-2 md:py-3 px-10 md:px-14 shadow-xl">
					<Link href="/rooms">CAZARE</Link>
				</button>
			</div>
		</ImagesSlider>
	)
}
