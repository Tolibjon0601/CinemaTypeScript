import  { FC } from "react";

const Detail :FC= () => {
	return (
		<div className="flex flex-col mx-auto ">
			<div className="flex gap-5 mb-12 justify-center">
				<img src="./image/detail_img_1.png" alt="" />
				<img src="./image/detail_img_2.png" alt="" />
			</div>
			<div>
				<h1 className="text-[20px]">Детали</h1>
				<ul className="flex gap-[81px] justify-center mt-6">
					<li>
						<p className="mb-4 text-[16px] text-start text-textcolor ">Продолжительность</p>
						<p className="mb-4 text-[16px] text-start text-textcolor">Премьера</p>
						<p className="mb-4 text-[16px] text-start text-textcolor">Производство</p>
						<p className="mb-4 text-[16px] text-start text-textcolor">Жанр</p>
						<p className="mb-4 text-[16px] text-start text-textcolor">Режиссер</p>
						<p className="mb-4 text-[16px] text-start text-textcolor">Возрастной рейтинг</p>
					</li>
					<li>
						<p className="mb-4 text-[16px] text-end text-textcolor">1ч 34м / 94 минут</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">07 марта 2024</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">США, Китай</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">Фэнтези, Комедия</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">Майк Митчелл, Стефани Стайн</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">6+</p>
					</li>
				</ul>
			</div>
			<div>
				<h1 className="text-[20px] mb-6 mt-6">В ролях</h1>
				<ul className="flex gap-[220px] justify-center mb-16">
					<li>
						<p className="mb-4 text-[16px] text-start text-textcolor">Джек Блэк</p>
						<p className="mb-4 text-[16px] text-start text-textcolor">Виола Дэвис</p>
						<p className="mb-4 text-[16px] text-start text-textcolor"> Джеймс Хун</p>
						<p className="mb-4 text-[16px] text-start text-textcolor">Иэн Макшейн </p>
						<p className="mb-4 text-[16px] text-start text-textcolor"> Ронни Чиэн </p>
					</li>
					<li>
						<p className="mb-4 text-[16px] text-end text-textcolor">Аквафина</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">Дастин Хоффман</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">Брайан Крэнстон</p>
						<p className="mb-4 text-[16px] text-end text-textcolor">Ке Хюи Куан </p>
						<p className="mb-4 text-[16px] text-end text-textcolor">Лори Тань Чинн</p>

					</li>
				</ul>
    <ul className="mx-auto">
     <h1 className="mb-6 text-xl">
     Сюжет
     </h1>
     <p className="max-w-[330px] mx-auto text-start mb-12 ">Продолжение приключений легендарного Воина Дракона, его верных друзей и наставника (часть вторая)</p>
     <button className="flex items-center gap-2 mx-auto py-[14px] px-[123px] bg-main_color rounded-xl"><img src="./image/buy_btn.svg" alt="" />Купить билет</button>
    </ul>
			</div>
		</div>
	);
};

export default Detail;
