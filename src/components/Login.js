import React, { useState } from "react";
import Logo from "../images/logo.png";
export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [captcha, setCaptcha] = useState();

  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="box w-[80%] h-[80%] flex shadow-xl shadow-black bg-[#00000089] rounded-xl md:rounded-none">
        <div className="w-1/2 h-full flex-col gap-6 items-center py-6 px-3 loginBg hidden md:flex">
          {/* <img src={Pencil} alt="" className="h-full w-full object-cover object-center" /> */}
          <h2 className="text-center text-3xl font-semibold text-white font-mono">
            WELCOME ADMIN
          </h2>
          <img
            src={Logo}
            alt="Government Logo"
            className="w-24 mb-2 select-none "
          />
          <div className="text-justify mx-8 text-white/90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            atque recusandae laborum est dolore quaerat ipsum, obcaecati id
            iusto veritatis porro quos mollitia voluptatum distinctio quidem
            deserunt accusantium cum eos!
          </div>
        </div>
        <div
          className="w-full overflow-hidden flex flex-col gap-5 items-center justify-evenly  bg-white py-6 px-8 transition-all lg:px-16 md:w-1/2"
          draggable={false}
        >
          <img
            src={Logo}
            alt="Government Logo"
            className="w-24 mb-2 select-none md:hidden"
          />
          <h2 className="text-black font-bold text-3xl font-sans">SIGN IN</h2>
          <div className="relative w-full">
            <input
              type="text"
              id="username"
              value={userName}
              className="border-b py-1 border-gray-500 hover:border-green-500 focus:outline-none focus:border-b-2 focus:border-black transition-colors w-full peer bg-transparent"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label
              htmlFor="username"
              className={
                !userName
                  ? `absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-3 peer-focus:text-black transition-all select-none`
                  : `absolute left-0 -top-3 cursor-text text-xs text-black transition-all select-none`
              }
            >
              Username
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              name=""
              id="password"
              value={password}
              className="border-b py-1 border-gray-500 hover:border-green-500 focus:outline-none focus:border-b-2 focus:border-black transition-colors w-full peer bg-transparent"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onPaste={() => setPassword()}
            />
            <label
              htmlFor="password"
              className={
                !password
                  ? `absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-3 peer-focus:text-black transition-all select-none`
                  : `absolute left-0 -top-3 cursor-text text-xs text-black transition-all select-none`
              }
            >
              Password
            </label>
          </div>
          <div className="w-full text-center font-extrabold bg-gray-300 font-serif select-none rounded py-2">
            4578
          </div>
          <div className="relative w-full">
            <input
              type="text"
              name=""
              id="captcha"
              value={captcha}
              className="border-b py-1 border-gray-500 hover:border-green-500 focus:outline-none focus:border-b-2 focus:border-black transition-colors w-full peer bg-transparent"
              onChange={(e) => {
                setCaptcha(e.target.value);
              }}
            />
            <label
              htmlFor="captcha"
              className={
                !captcha
                  ? `absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-3 peer-focus:text-black transition-all select-none`
                  : `absolute left-0 -top-3 cursor-text text-xs text-black transition-all select-none`
              }
            >
              Enter Captcha
            </label>
          </div>
          <button className="bg-indigo-600 px-6 py-1 w-full text-white rounded hover:bg-indigo-700 hover:scale-105 transition-all mt-2">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
