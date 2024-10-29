import { FC, useState } from "react";
import CinemaTicket from "./cinematicket";
import WatchedCinema from "./watchedCinema";

const Ticketpage :FC= () => {
	const [tab, setTab] = useState(1);

	return (
		<div className="flex flex-col items-center justify-center pt-12 ">
			<div className="bg-main_bg_color rounded-xl w-[380px] flex">
				<button
					onClick={() => setTab(1)}
					className={`px-7 py-5 w-[190px] rounded-xl ${
						tab === 1 ? "bg-[#242323] text-main_color" : ""
					}`}
				>
					Активные
				</button>
				<button
					onClick={() => setTab(2)}
					className={`px-7 py-5 w-[190px] rounded-xl ${
						tab === 2 ? "bg-[#242323] text-main_color" : ""
					}`}
				>
					История
				</button>
			</div>
			{tab === 1 ? (
				<>
					{" "}
					<CinemaTicket />{" "}
				</>
			) : (
				<WatchedCinema />
			)}
		</div>
	);
};

export default Ticketpage;
