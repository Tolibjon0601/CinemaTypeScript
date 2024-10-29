import React, { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>("");

  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);

    if (otpValue.length === 4) {
      navigate("/");
    }
  };

  return (
    <>
      <button
        onClick={() => navigate("/login")}
        className="ml-16 px-4 py-5 bg-swiper_bg rounded-xl"
      >
        <MdOutlineArrowBackIosNew color="red" />
      </button>

      <div className="mx-auto text-center">
        <h1 className="font-medium text-[32px] pt-12 mb-4">Введите СМС-код</h1>
        <p className="max-w-[330px] mx-auto text-center text-[#777] mb-[40px]">
          Введите СМС-код, который мы отправили на номер{" "}
          <span className="text-main_color">+998 88 800 90 00</span>
        </p>

        <div className="flex justify-center mb-4">
          <OTPInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={4}
            separator={<span></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="otp-input mr-2"
                style={{
                  backgroundColor: "#222",
                  color: "#fff",
                  border: "1px solid #111",
                  textAlign: "center",
                  fontSize: "24px",
                  padding: "5px",
                  width: "89px",
                  height: "64px",
                  borderRadius: "12px",
                }}
              />
            )}
          />
        </div>

        <p className="max-w-[330px] mx-auto text-center text-[#777] mb-[40px]">
          Отправить код еще раз <span className="text-main_color">0:52 </span>
        </p>
      </div>
    </>
  );
};

export default AuthPage;
