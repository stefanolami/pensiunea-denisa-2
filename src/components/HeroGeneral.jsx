import Image from 'next/image'

export default function HeroGeneral({ messages }) {
	return (
		<div className="w-full h-[100svh] xl:h-[100vh]">
			<div className="absolute w-full h-full bg-gradient-to-b from-transparent from-40% to-beige z-20"></div>
			<div className="absolute w-full h-full bg-black/60 z-10"></div>
			<Image
				src="/pic2.jpg"
				alt="hero-pic"
				fill="responsive"
				className="bg-black/60"
			/>
		</div>
	)
}
