import React, { useState } from "react";
import Wave from '../images/wave.png'
import Avatar from '../images/unlock.svg'

export default function Login() {
    
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [captcha, setCaptcha] = useState();

  return (
      <div className=" h-screen w-screen grid ">
          <img src={Wave} alt="" className="absolute h-full w-full -z-10 opacity-80 select-none lg:w-1/2 "  />
          <img src={Avatar} alt="" className="hidden absolute h-1/2 w-1/2 self-center -z-10 select-none  lg:block" />
      <div className="w-full mx-auto  overflow-hidden flex flex-col gap-5 items-center self-center justify-evenly  bg-white bg-opacity-90 lg:bg-opacity-80 py-6 px-16 rounded-lg shadow-lg shadow-black scale-105 transition-all md:max-w-xs lg:mr-[18%] focus-within:shadow-xl focus-within:shadow-black" draggable={false}>
        {/* <img src={Logo} alt="Government Logo" className="w-24 mb-2 select-none " /> */}
          <h2 className="text-center text-xl font-semibold text-orange-800 underline underline-offset-4">WELCOME ADMIN</h2>
        <div className="relative w-full">
          <input
            type="text"
            id="username"
            value={userName}
            className="border-b py-1 border-gray-500 hover:border-green-500 focus:outline-none focus:border-b-2 focus:border-black transition-colors w-full peer bg-transparent"
            onChange={(e) => {setUserName(e.target.value);}}
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
            className="border-b py-1 border-gray-500 hover:border-red-700 focus:outline-none focus:border-b-2 focus:border-black transition-colors w-full peer bg-transparent"
                      onChange={(e) => { setPassword(e.target.value); }}
                      onPaste={()=>setPassword()}
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
              <div className="w-full text-center font-extrabold bg-gray-300 font-serif select-none rounded ">
                  4578
              </div>
        <div className="relative w-full">
          <input
            type="text"
            name=""
            id="captcha"
            value={captcha}
            className="border-b py-1 border-gray-500 hover:border-red-700 focus:outline-none focus:border-b-2 focus:border-black transition-colors w-full peer bg-transparent"
            onChange={(e) => {setCaptcha(e.target.value);}}
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
        <button className="bg-indigo-600 px-6 py-1 text-white rounded hover:bg-indigo-700 hover:scale-105 transition-all mt-2">
          LOGIN
        </button>
      </div>
    </div>
  );
}
