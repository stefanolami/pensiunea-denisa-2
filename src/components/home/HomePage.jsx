import Image from 'next/image'
import Map from '@/components/home/Map'
import RoomCard from '@/components/home/RoomCard'

export default function HomePage() {
	return (
		<div
			id="homepage"
			className="text-brown text-center"
		>
			<div className="w-full bg-beige">
				<section
					id="about-section"
					className="p-8 md:p-16"
				>
					<div className="md:w-3/4 mx-auto">
						<h3 className="mb-6 xl:mb-16 mt-10 xl:mt-10">
							About Us
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat
						</p>
					</div>
				</section>
				<div className="w-full aspect-[1/2] md:aspect-[3/1] overflow-hidden">
					<Image
						src={'/pic1.jpg'}
						alt="about-pic"
						width={3000}
						height={2000}
						className="w-full h-full object-cover object-center"
					/>
				</div>
			</div>
			<div className="w-full bg-beige2">
				<section
					id="map-section"
					className="bg-beige2 p-8 md:p-24"
					/* className="bg-beige2 p-8 md:p-24 md:grid md:grid-cols-2 md:gap-16" */
				>
					<div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 md:gap-6 w-3/4 md:w-full mx-auto">
						<RoomCard />
						<RoomCard />
						<RoomCard />
						<RoomCard />
					</div>
				</section>
			</div>
			<section
				id="rooms-section"
				className=" p-8"
				/* className="bg-beige2 p-8 md:p-24 md:grid md:grid-cols-2 md:gap-16" */
			>
				<Map />
			</section>
		</div>
	)
}
