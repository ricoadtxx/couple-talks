import ButtonHome from "../Elements/ButtonHome";
import { motion } from "framer-motion";

function Homepage() {
	return (
		<section className="mx-auto w-3/4 lg:w-1/2 h-screen flex flex-col items-center justify-center">
			<img
				src="../../../../src/assets/img/love.png"
				alt=""
				className="absolute h-screen lg:w-screen max-w-full object-top hidden md:block"
			/>
			<img
				src="../../../../src/assets/img/love_mobile.png"
				alt=""
				className="absolute h-screen lg:w-screen max-w-sm object-top md:hidden"
			/>
			<div className="px-2 z-10 text-center overflow-hidden">
				<motion.h1
					className="font-salsa font-bold tracking-widest text-4xl lg:text-5xl py-10"
					initial={{ y: -50 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.7 }}
				>
					WELCOME TO COUPLE TALKS
				</motion.h1>
				<motion.p
					className="text-base font-roboto lg:text-xl lg:pr-4 text-justify text-tertiary font-bold"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					hai, website ini gue buat atas dasar rasa penyesalan gue pas dulu
					masih pacaran. Selama pacaran, gue selalu tidak bisa mengekspresikan
					perasaan yang tidak enak kepada pasangan gue. So gue buat website ini
					buat kalian yang merasa bingung untuk mengekspresikan perasaannya
					kepada pasangan. Disini kalian bisa dapet topik random yang udah gue
					siapin, have fun guys.
				</motion.p>
				<ButtonHome />
			</div>
		</section>
	);
}

export default Homepage;
