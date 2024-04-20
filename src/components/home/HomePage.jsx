import Image from 'next/image'
import Map from '@/components/home/Map'

export default function HomePage() {
	return (
		<div
			id="homepage"
			className="text-brown text-center"
		>
			{/* <section
				id="about-section"
				className="bg-beige p-8 md:p-24 md:grid md:grid-cols-2 md:gap-16"
			>
				<div className="order-3">
					<Image
						src={'/pic1.jpg'}
						alt="about-pic"
						width={3000}
						height={2000}
					/>
				</div>
				<div className="order-2 md:w-3/4 mx-auto">
					<h3 className="mt-6 xl:mt-16">About Us</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</div>
			</section> */}
			<section
				id="map-section"
				className="bg-beige2 p-8"
				/* className="bg-beige2 p-8 md:p-24 md:grid md:grid-cols-2 md:gap-16" */
			>
				<Map />
			</section>
		</div>
	)
}
