import { useState } from "react";
import dataCard from "../Data.jsx";
import { motion } from "framer-motion";

function Deeptalk() {
	const [isCardFlipped, setIsCardFlipped] = useState(false);
	const [randomTopicIndex, setRandomTopicIndex] = useState(0);

	const handleCardFlip = () => {
		const randomIndex = Math.floor(Math.random() * dataCard.length);
		setRandomTopicIndex(randomIndex);
		setIsCardFlipped(!isCardFlipped);
	};

	return (
		<motion.div
			className="bg-primary py-8 px-3"
			initial={{ x: window.innerWidth > 768 ? -1000 : -100 }}
			whileInView={{ x: 0 }}
			transition={{ duration: window.innerWidth > 768 ? 0.8 : 0.6 }}
		>
			<div className="w-3/4 mx-auto flex flex-col md:my-16 lg:my-0 pb-10 justify-center items-center">
				<div className="pt-16 lg:pt-1.5">
					<h1 className="font-salsa font-bold text-5xl">Pick A Topic</h1>
				</div>
				<div
					className={`card my-24 ${isCardFlipped ? "flipped" : ""}`}
					onClick={handleCardFlip}
				>
					<svg
						className={`img ${
							isCardFlipped ? "hidden transition ease-in-out" : ""
						}`}
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 30 30"
						style={{
							enableBackground: "new 0 0 30 30",
						}}
						xmlSpace="preserve"
					>
						<style type="text/css">
							{
								"\n\t.st0{fill:none;stroke:#6C3DB7;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:#1F992A;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st2{fill:none;stroke:#6A83BA;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st3{fill:#8A8AFF;stroke:#8A8AFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st4{fill:#6C3DB7;stroke:#6C3DB7;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st5{fill:#A576FF;stroke:#A576FF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st6{fill:#F2BB41;stroke:#F2BB41;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st7{fill:#E08838;stroke:#E08838;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st8{fill:#1F992A;stroke:#1F992A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st9{fill:#5EC11E;stroke:#5EC11E;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st10{fill:#E3FAFF;stroke:#E3FAFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st11{fill:#FF5093;stroke:#FF5093;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st12{fill:#B7257F;stroke:#B7257F;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st13{fill:#5189E5;stroke:#5189E5;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st14{fill:#6EBAFF;stroke:#6EBAFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st15{fill:#EDD977;stroke:#EDD977;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st16{fill:#8C43FF;stroke:#8C43FF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st17{fill:#5252BA;stroke:#5252BA;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st18{fill:none;stroke:#E3FAFF;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st19{fill:#354C75;stroke:#354C75;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n"
							}
						</style>
						<g>
							<path
								className="st11"
								d="M15,8.7l-1.6-1.7c-2.3-2.5-6.2-2.6-8.7-0.2l0,0c-2.2,2.2-2.3,5.7-0.2,8L7,17.3l8,8.7l8-8.7l1-1.1l-8.3-8.3 L15,8.7z"
							/>
						</g>
						<path
							className="st12"
							d="M25.3,6.7L25.3,6.7c-2.4-2.4-6.4-2.2-8.7,0.2l-0.9,1l8.3,8.3l1.4-1.5C27.6,12.4,27.5,8.9,25.3,6.7z"
						/>
					</svg>
					<div>
						<h1
							className={`text-content text-2xl font-bold text-secondary mb-2 px-2 pb-10 text-center font-roboto ${
								!isCardFlipped ? "hidden" : ""
							}`}
						>
							{dataCard[randomTopicIndex].title}
						</h1>
						<p
							className={`text-content px-2 font-bold font-salsa text-primary text-xl text-center ${
								!isCardFlipped ? "hidden" : ""
							}`}
						>
							{dataCard[randomTopicIndex].description}
						</p>
					</div>
				</div>
				<div className="w-[150px] h-[50px] mx-auto text-center mb-10 lg:mb-0 lg:mt-0">
					<button
						onClick={handleCardFlip}
						className="w-[140px] h-[40px] shadow-2xl bg-secondary outline outline-offset-2 outline-1 outline-white hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]"
					>
						<span className="font-bold text-white">Get Topic</span>
					</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Deeptalk;
