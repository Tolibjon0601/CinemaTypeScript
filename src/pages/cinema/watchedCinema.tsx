import { FC } from "react"

const WatchedCinema:FC = () => {
  return (
    <div className="flex flex-col mx-auto  gap-4 ">
     <div className="flex p-[6px] items-center gap-5 bg-[#1D1D1D] relative rounded-xl mt-12 min-w-[570px]">
<div >
				<img src="./image/ticket_img1.png" alt="" />
			</div>
			<div>
				<h2 className="text-2xl mb-5">Кунг Фу Панда 4</h2>
    <ul className="flex gap-[6px] mb-4">
     <li><p className="text-medium text-[14px] text-textcolor" >2024</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >• </p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >RU </p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >6+</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >1ч 34м / 94 минут</p></li>
    </ul>
    <p className="text-medium  text-[14px] mb-4" >Magic Cinema</p>
    <p className="text-medium  text-[14px] mb-4" >Зал №1</p>
    <p className="text-medium  text-[14px] mb-4" >14 марта, 19:30</p>
    <button className="flex items-center gap-[6px] text-medium py-3 px-4 rounded-lg bg-button_color"><img src="./image/check_icon.svg" alt="" />Оплачено</button>
			</div>

</div>
<div className="flex p-[6px] items-center gap-5 bg-[#1D1D1D] relative rounded-xl min-w-[570px]">
<div >
				<img src="./image/ticket_img6.png" alt="" />
			</div>
			<div>
				<h2 className="text-2xl mb-5">Дюна 2</h2>
    <ul className="flex gap-[6px] mb-4">
     <li><p className="text-medium text-[14px] text-textcolor" >2024</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >• </p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >RU </p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >16+</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >2ч 56м / 176 минут</p></li>
    </ul>
    <p className="text-medium  text-[14px] mb-4" >Magic Cinema</p>
    <p className="text-medium  text-[14px] mb-4" >Зал №1</p>
    <p className="text-medium  text-[14px] mb-4" >14 марта, 19:30</p>
    <button className="flex items-center gap-[6px] text-medium py-3 px-4 rounded-lg bg-button_color"><img src="./image/check_icon.svg" alt="" />Оплачено</button>
			</div>

</div>
    </div>
  )
}

export default WatchedCinema