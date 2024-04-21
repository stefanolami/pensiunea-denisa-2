import Image from 'next/image'

export default function RoomCard({ room }) {
	return (
		<div className="grid-rows-[100px, 80px] gap-20 w-full">
			<div className="mb-3 aspect-[3/4]">
				<Image
					src="/pensiune1.jpg"
					alt="room-pic"
					width={2000}
					height={1500}
					className="object-cover h-full"
				/>
			</div>
			<div className="border-2 border-brown mb-10 text-left px-4 md:px-6 pt-4 md:pt-10 pb-3 md:pb-8">
				<p className="">Camera Single</p>
				<p>de la 200 lei / noapte</p>
			</div>
		</div>
	)
}
