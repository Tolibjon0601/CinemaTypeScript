import React, { useState } from "react";

interface Film {
  id: number;
  title: string;
  img: string;
  language: string;
  ageRating: string;
  duration: string;
}

const films: Film[] = [
  {
    id: 1,
    title: "Кунг Фу Панда 4",
    img: "./image/ticket_img5.png",
    language: "RU",
    ageRating: "6+",
    duration: "1ч 34м / 94 минут",
  },
  {
    id: 2,
    title: "Кунг Фу Панда 3",
    img: "./image/ticket_img3.png",
    language: "RU",
    ageRating: "6+",
    duration: "1ч 34м / 94 минут",
  },
];

const Searchpage: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState<string>("");

  const filteredFilms: Film[] = films.filter((film) =>
    film.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center">
      <input
        type="text"
        className="search_input mx-auto mt-12"
        placeholder="Названия фильма"
        value={searchTitle}
        onChange={(evt) => setSearchTitle(evt.target.value)}
      />

      <div className="flex gap-5 justify-center mt-12">
        {filteredFilms.map((film) => (
          <div key={film.id} className="flex p-[6px] gap-5 bg-[#1D1D1D] rounded-[12px] max-w-[570px]">
            <div>
              <img src={film.img} alt={film.title} />
            </div>
            <div>
              <h2 className="text-2xl mb-5 mt-6">{film.title}</h2>
              <ul className="flex gap-[6px] mb-4">
                <li>
                  <p className="text-medium text-[14px] text-textcolor">{film.language}</p>
                </li>
                <li>
                  <p className="text-medium text-[14px] text-textcolor">•</p>
                </li>
                <li>
                  <p className="text-medium text-[14px] text-textcolor">{film.ageRating}</p>
                </li>
                <li>
                  <p className="text-medium text-[14px] text-textcolor">•</p>
                </li>
                <li>
                  <p className="text-medium text-[14px] text-textcolor">{film.duration}</p>
                </li>
              </ul>
              <button className="py-4 px-[100px] bg-main_color rounded-xl mt-24">
                О фильме
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searchpage;
