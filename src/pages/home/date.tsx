import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FC } from "react";

const CalendarSwiper :FC= () => {
	const days = [
		{ day: "Чт", date: 28, month: "Март" },
		{ day: "Пт", date: 29, month: "Март" },
		{ day: "Сб", date: 30, month: "Март" },
		{ day: "Вс", date: 31, month: "Март" },
		{ day: "Пн", date: 1, month: "Апрель" },
		{ day: "Вт", date: 2, month: "Апрель" },
		{ day: "Ср", date: 3, month: "Апрель" },
		{ day: "Чт", date: 4, month: "Апрель" },
		{ day: "Пт", date: 5, month: "Апрель" },
		{ day: "Сб", date: 6, month: "Апрель" },
		{ day: "Вс", date: 7, month: "Апрель" },
		{ day: "Пн", date: 8, month: "Апрель" },
		{ day: "Вт", date: 9, month: "Апрель" },
		{ day: "Ср", date: 10, month: "Апрель" },
		{ day: "Чт", date: 11, month: "Апрель" },
		{ day: "Пт", date: 12, month: "Апрель" },
		{ day: "Сб", date: 13, month: "Апрель" },
		{ day: "Вс", date: 14, month: "Апрель" },
		{ day: "Пн", date: 15, month: "Апрель" },
		{ day: "Вт", date: 16, month: "Апрель" },
		{ day: "Ср", date: 17, month: "Апрель" },
		{ day: "Чт", date: 18, month: "Апрель" },
		{ day: "Пт", date: 19, month: "Апрель" },
		{ day: "Сб", date: 20, month: "Апрель" },
		{ day: "Вс", date: 21, month: "Апрель" },
		{ day: "Пн", date: 22, month: "Апрель" },
		{ day: "Вт", date: 23, month: "Апрель" },
		{ day: "Ср", date: 24, month: "Апрель" },
		{ day: "Чт", date: 25, month: "Апрель" },
		{ day: "Пт", date: 26, month: "Апрель" },
		{ day: "Сб", date: 27, month: "Апрель" },
		{ day: "Вс", date: 28, month: "Апрель" },
		{ day: "Пн", date: 29, month: "Апрель" },
		{ day: "Вт", date: 30, month: "Апрель" },
		{ day: "Ср", date: 1, month: "Mай" },
		{ day: "Чт", date: 2, month: "Mай" },
		{ day: "Пт", date: 3, month: "Mай" },
	];

	let currentMonth = "";

	return (
		<div style={{ width: "100%", padding: "10px" }}>
<Swiper
  spaceBetween={10}
  slidesPerView={15}
  modules={[Navigation, Autoplay]}
  loop={true}
  autoplay={{
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  }}
  style={{ width: "100%" }}
>
				{days.map((day, index) => {
					const showMonth = day.month !== currentMonth;
					currentMonth = day.month;

					return (
						<SwiperSlide key={index}>
				<div className="pt-10">
				{showMonth && <div className="mt-[-36px] mb-3">{day.month}</div>}
				<div className="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl bg-main_bg_color font-medium text-[14px] border-2 border-transparent hover:border-solid hover:border-main_color transition-all duration-300">
								<div>{day.day}</div>
								<div>{day.date}</div>
							</div>
				</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default CalendarSwiper;
