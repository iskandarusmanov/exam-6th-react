import React, { useState } from "react";
import "./Modal.scss";
import Input from "../Input";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="login__btn">
        <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
      </button>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal__content">
          <h3 className="modal__title">Login</h3>
          <p className="text-center text-[13px]">
            Enter your email and password to login.
          </p>
          <form className="w-[350px] m-auto ">
            <input
              type="email"
              placeholder="almamun_uxui@outlook.com"
              className="w-full border mt-[14px] border-gray-400 focus:outline-none focus:border-green-600 p-3 h-[40px] rounded-[5px]"
            />

            <input
              type="password"
              placeholder="password"
              className="w-full border mt-[14px] border-gray-400 focus:outline-none focus:border-green-600 p-3 h-[40px] rounded-[5px]"
            />
            <p className="text-end mt-5 text-green-500">Forgot password?</p>
            <button className="w-full bg-green-600 h-[45px] rounded-[5px] mt-[27px] mb-[40px] text-white font-semibold">
              Login
            </button>
          </form>

          <p className="text-center text-[8px] ">Or login with</p>

          <div className=" w-[350px] m-auto mt-[27px] h-[45px] flex justify-center gap-2 font-semibold text-[13px] items-center border text-gray-500">
            <i className="fa-brands fa-google  text-green-600 text-[18px]"></i> Login with Google
          </div>
          <div className=" w-[350px] m-auto mt-[14px] h-[45px] flex justify-center gap-2 items-center border font-semibold text-[13px] text-gray-500">
          <i className="fa-brands fa-facebook-f text-blue-600 text-[18px]"></i> Login with Facebook
          </div>


          <button className="close__modal" onClick={closeModal}>
            <i className="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
