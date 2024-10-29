import React, { useState } from "react";
import CalendarSwiper from "./date";
import Detail from "./detail";
import CinemaPrice from "../cinema/cinemaPrice";

const ToggleBtn: React.FC = () => {
	const [tab, setTab] = useState<number>(1);

	return (
		<div className="flex flex-col items-center justify-center pt-12">
			<div className="bg-main_bg_color rounded-xl w-[380px] flex">
				<button
					onClick={() => setTab(1)}
					className={`px-7 py-5 w-[190px] rounded-xl ${
						tab === 1 ? "bg-[#242323] text-main_color" : ""
					}`}
				>
					Билеты
				</button>
				<button
					onClick={() => setTab(2)}
					className={`px-7 py-5 w-[190px] rounded-xl ${
						tab === 2 ? "bg-[#242323] text-main_color" : ""
					}`}
				>
					О фильме
				</button>
			</div>
			{tab === 1 ? (
				<>
					<CalendarSwiper />
					<CinemaPrice />
				</>
			) : (
				<Detail />
			)}
		</div>
	);
};

export default ToggleBtn;
