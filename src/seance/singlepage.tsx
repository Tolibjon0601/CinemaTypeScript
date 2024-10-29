import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import useStore from "../../src/zustand/index";
import ToggleBtn from "./../pages/home/toggleBtn";

interface MovieData {
  id: string;
  title: string;
  image: string;
  description: string;
}

type Params = {
  id: string;
};

const SinglePage: React.FC = () => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  const setTicket = useStore((state) => state.setTicket);

  const { data, loading, error } = useFetchData<MovieData>(
    `https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce/${id}`
  );

  if (loading) {
    return <div>...Loading...</div>;
  }

  if (error || !data) {
    return <div>Error fetching data.</div>;
  }

  const handleBuyClick = () => {
    setTicket({
      id: data.id,
      title: data.title,
      image: data.image,
      description: data.description,
    });
    navigate('/CinemaTicket');
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-12 left-0 ml-16 px-4 py-5 bg-swiper_bg rounded-xl"
        >
          <MdOutlineArrowBackIosNew color="red" />
        </button>
        <img className="w-full h-[640px] rounded-3xl" src={data.image} alt={data.title} />
        <div className="absolute top-[430px] flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-semibold">{data.title}</h1>
          <p className="text-xl">{data.description}</p>
          <ul className="flex gap-[6px] mb-4">
            <li><p className="text-medium text-[18px]">2024</p></li>
            <li><p className="text-medium text-[18px]">•</p></li>
            <li><p className="text-medium text-[18px]">RU</p></li>
            <li><p className="text-medium text-[18px]">•</p></li>
            <li><p className="text-medium text-[18px]">18+</p></li>
            <li><p className="text-medium text-[18px]">•</p></li>
            <li><p className="text-medium text-[18px]">2ч 56м / 176 минут</p></li>
          </ul>
          <button
            onClick={handleBuyClick}
            className="py-4 px-[137px] bg-main_color flex items-center text-medium gap-2 rounded-xl"
          >
            <img src="/image/buy-icon.svg" alt="Buy Icon" />
            Смотреть
          </button>
        </div>
      </div>
      <ToggleBtn />
    </div>
  );
};

export default SinglePage;
