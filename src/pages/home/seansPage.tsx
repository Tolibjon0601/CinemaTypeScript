import {  useNavigate } from "react-router-dom";
import CalendarSwiper from "./date";

const SeansPage = () => {
	const navigate = useNavigate();

	const handleNavigation = () => {
			navigate("/cinemapage");
	};
	return (
		<div className="pt-12  mx-auto">
			<div className="flex justify-between items-center mb-12">
				<div className="flex gap-2">
					<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex">
						<img src="./image/infinity-icon.svg" alt="infinity icon" />
						Все
					</button>

			<button  className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"   onClick={handleNavigation}>
						<img src="./image/movie-icon.svg" alt="movie icon" />
						Кино
					</button>

					<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex">
						<img src="./image/clapperboard-icon.svg" alt="theater icon" />
						Театр
					</button>
					<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex">
						<img src="./image/movie_icon_2.png" alt="concert icon" />
						Концерты
					</button>
					<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex">
						<img src="./image/ball-icon.svg" alt="sport icon" />
						Спорт
					</button>
					<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex">
						<img src="./image/earth-icon.svg" alt="other icon" />
						Другие
					</button>
				</div>

				<div>
					<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex">
						<img src="./image/hall_icon.svg" alt="hall icon" />
						Залы
					</button>
				</div>
			</div>

			<div>
				<CalendarSwiper />
				<div className="flex items-center justify-between mt-6">
					<a href="#" className="text-white">
						На неделе
					</a>
					<button className="text-main_color" >
						Показать все
					</button>
				</div>
			</div>
		</div>
	);
};

export default SeansPage;
