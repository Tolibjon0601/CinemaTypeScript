import React from "react";
import Header from "../../components/footer";
import Footer from "../../components/header";
import { Outlet, useLocation } from "react-router-dom";
import MainSwiper from "../../pages/home/swiper";

const MainLayout: React.FC = () => {
	const location = useLocation();

	return (
		<div className="container max-w-[1360px] mx-auto text-white flex flex-col min-h-screen">
			<Header />
			<div className="flex-grow">
				<Outlet />
			</div>

			{location.pathname !== "/login" && location.pathname !== "/authPage" && <MainSwiper />}
			{location.pathname !== "/login" && location.pathname !== "/authPage" && <Footer />}
		</div>
	);
};

export default MainLayout;
