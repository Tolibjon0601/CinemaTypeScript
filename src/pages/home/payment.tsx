import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface PaymentPageProps {
  closeModal: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ closeModal }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-start bg-black bg-opacity-[0.7] overflow-y-auto max-h-screen">
      <button
        onClick={closeModal}
        className="absolute top-4 left-4 ml-16 px-4 py-5 bg-swiper_bg rounded-xl"
      >
        <MdOutlineArrowBackIosNew color="red" />
      </button>
      <h1 className="text-2xl mt-4">Оплата</h1>
      <p className="text-[14px] mt-3 text-text_janr">Выберите вид оплаты</p>

      <div className="flex p-6 items-center gap-5 bg-[#1D1D1D] relative rounded-t-[12px] mt-12 min-w-[570px] mb-12">
        <div>
          <img src="./image/ticket_img1.png" alt="Кунг Фу Панда 4" />
        </div>
        <div>
          <h2 className="text-2xl mb-5">Кунг Фу Панда 4</h2>
          <ul className="flex gap-[6px] mb-4">
            <li><p className="text-medium text-[14px] text-textcolor">2024</p></li>
            <li><p className="text-medium text-[14px] text-textcolor">•</p></li>
            <li><p className="text-medium text-[14px] text-textcolor">RU</p></li>
            <li><p className="text-medium text-[14px] text-textcolor">•</p></li>
            <li><p className="text-medium text-[14px] text-textcolor">6+</p></li>
            <li><p className="text-medium text-[14px] text-textcolor">•</p></li>
            <li><p className="text-medium text-[14px] text-textcolor">1ч 34м / 94 минуты</p></li>
          </ul>
          <p className="text-medium text-[14px] mb-4">Magic Cinema</p>
          <p className="text-medium text-[14px] mb-4">Зал №1</p>
          <button className="flex items-center gap-[6px] text-medium py-3 px-4 rounded-lg bg-button_color">
            28 марта, 19:30
          </button>
        </div>
      </div>

      <div className="flex gap-20 p-5 bg-swiper_bg rounded-xl">
        <p className="text-[16px] font-medium">Комиссия сервиса</p>
        <p className="text-[16px] font-medium">5 000 сум</p>
      </div>
      <div className="flex gap-24 p-5 bg-swiper_bg rounded-xl mt-2 mb-12">
        <p className="text-[16px] font-medium">Общая сумма</p>
        <p className="text-[16px] font-medium">
          <span className="text-main_color">135 000</span> сум
        </p>
      </div>

      <p className="text-text_janr mb-5">Выберите способ оплаты</p>
      <div className="flex gap-5">
        <button className="px-[96px] py-[27px] bg-swiper_bg rounded-xl border-2 border-transparent hover:border-main_color">
          <img src="./image/click-icon.svg" alt="Click Icon" />
        </button>
        <button className="px-[96px] py-[27px] bg-swiper_bg rounded-xl border-2 border-transparent hover:border-main_color">
          <img src="./image/payme-icon.svg" alt="Payme Icon" />
        </button>
      </div>

      <div className="flex mb-12 justify-between w-full px-10 pt-5">
        <div className="flex gap-3">
          <div className="mb-2 p-3 bg-swiper_bg rounded-xl relative w-[148px]">
            <img className="top-2 right-2 absolute" src="./image/close-btn.svg" alt="Close" />
            <p className="mb-4 text-[#a1a1a1] font-medium">65 000 сум</p>
            <p>Ряд 7, Место 11</p>
          </div>
          <div className="mb-2 p-3 bg-swiper_bg rounded-xl relative w-[148px]">
            <img className="top-2 right-2 absolute" src="./image/close-btn.svg" alt="Close" />
            <p className="mb-4 text-[#a1a1a1] font-medium">65 000 сум</p>
            <p>Ряд 7, Место 11</p>
          </div>
        </div>

        <button className="my-4 px-[78px] bg-main_color rounded-xl">Оплатить</button>
      </div>
    </div>
  );
};

export default PaymentPage;
