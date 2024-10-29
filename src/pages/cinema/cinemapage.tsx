import React from "react";
import ButtonsPage from "../home/buttons";

const CinemaPage: React.FC = () => {
	return (
		<div>
			<ButtonsPage />
			<div className="flex gap-6 items-center justify-center">
				<img src="./image/cinema_img_1.png" alt="Cinema Image 1" />
				<img src="./image/cinema_img_2.png" alt="Cinema Image 2" />
				<img src="./image/cinema_img_3.png" alt="Cinema Image 3" />
			</div>
		</div>
	);
};

export default CinemaPage;
