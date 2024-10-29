import { FC } from "react"


const ButtonsPage :FC= () => {
  return (
   <div className="flex gap-[180px] justify-center items-center mb-12">
   <div className="flex gap-2">
    <button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex ">
     <img src="./image/infinity-icon.svg" className="hover:bg-white"  alt="infinity icon" />
     Все
    </button>

  <button  className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"  >
     <img src="./image/movie-icon.svg" className="hover:bg-white" alt="movie icon" />
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
  )
}

export default ButtonsPage