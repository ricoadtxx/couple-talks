import { Link } from "react-router-dom";

function ButtonHome() {
	return (
		<div className="w-fit mx-auto py-2 font-salsa font-bold text-lg mt-5 md:text-2xl text-primary">
			<button className="btn">
				<Link to={"/deeptalk"} className="wrapper">
					<p className="text">Let{"'"}s Deeptalk</p>
					<div className="flower flower1">
						<div className="petal one"></div>
						<div className="petal two"></div>
						<div className="petal three"></div>
						<div className="petal four"></div>
					</div>
					<div className="flower flower2">
						<div className="petal one"></div>
						<div className="petal two"></div>
						<div className="petal three"></div>
						<div className="petal four"></div>
					</div>
					<div className="flower flower3">
						<div className="petal one"></div>
						<div className="petal two"></div>
						<div className="petal three"></div>
						<div className="petal four"></div>
					</div>
					<div className="flower flower4">
						<div className="petal one"></div>
						<div className="petal two"></div>
						<div className="petal three"></div>
						<div className="petal four"></div>
					</div>
					<div className="flower flower5">
						<div className="petal one"></div>
						<div className="petal two"></div>
						<div className="petal three"></div>
						<div className="petal four"></div>
					</div>
					<div className="flower flower6">
						<div className="petal one"></div>
						<div className="petal two"></div>
						<div className="petal three"></div>
						<div className="petal four"></div>
					</div>
				</Link>
			</button>
		</div>
	);
}

export default ButtonHome;
