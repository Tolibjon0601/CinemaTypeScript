import React from "react";
import { useSelector } from "react-redux";

interface LanguageState {
  language: string;
}

const Footer: React.FC = () => {
  const { language } = useSelector((state: { language: LanguageState }) => state.language);

  return (
    <div className="flex justify-around pt-[120px]">
      <ul>
        <li className="mb-[48px]">
          <img src="./image/footer_logo.svg" alt="Footer Logo" />
        </li>
        <li className="mb-2">
          <img src="/image/google_icon.svg" alt="Google Icon" />
        </li>
        <li>
          <img src="/image/appStore_icon.svg" alt="App Store Icon" />
        </li>
      </ul>
      <ul className="gap-4 flex flex-col">
        <li>
          <h2 className="font-medium text-lg text-white hover:text-main_color">О нас</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/note_icon.svg" alt="Note Icon" />
          <p className="text-textcolor hover:text-main_color">Публичная оферта</p>
        </li>
        <li className="flex gap-2 font-medium text-lg text-main_color underline">
          <img src="./image/advertising_icon.svg" alt="Advertising Icon" />
          <p>Реклама</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/faq_icon.svg" alt="FAQ Icon" />
          <p className="text-textcolor hover:text-main_color">F.A.Q</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/phone_icon.svg" alt="Phone Icon" />
          <p className="text-textcolor hover:text-main_color">Контакты</p>
        </li>
      </ul>
      <ul className="gap-4 flex flex-col">
        <li>
          <h2 className="font-medium text-lg text-white hover:text-main_color">Категории</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/cinema_icon.svg" alt="Cinema Icon" />
          <p className="text-textcolor hover:text-main_color">Кино</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/teatr_icon.svg" alt="Theater Icon" />
          <p className="text-textcolor hover:text-main_color">Театр</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/konsert_icon.svg" alt="Concert Icon" />
          <p className="text-textcolor hover:text-main_color">Концерты</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/sport_icon.svg" alt="Sport Icon" />
          <p className="text-textcolor hover:text-main_color">Спорт</p>
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="font-medium text-lg text-white hover:text-main_color">Связаться с нами</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg text-main_color mt-[20px]">
          <a href="tel:+998958973338">+998 (95) 897-33-38</a>
        </li>
        <li className="font-medium text-lg mt-[54px]">
          <p className="hover:text-main_color">Социальные сети</p>
        </li>
        <li className="flex gap-[20px] mt-[20px]">
          <img src="./image/instagram_icon.svg" alt="Instagram Icon" />
          <img src="./image/facebook_icon.svg" alt="Facebook Icon" />
          <img src="./image/youtube_icon.svg" alt="YouTube Icon" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
