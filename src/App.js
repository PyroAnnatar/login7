import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-[url('/starrynight.png')] bg-cover bg-center -z-10">
      <div className="h-full w-full bg-[#00000080] -z-10 flex justify-center items-center">
        {/* Login */}
        <div className="flex flex-col w-[500px] gap-6 text-center mr-10 bg-[#FFFFFF33] p-7 py-20 rounded-[50px] z-10 text-[#FFFFFFCC]">
          <h1 className="uppercase text-5xl font-bold">Login</h1>
          <input
            type="text"
            className="py-2 px-4 text-lg placeholder-[#FFFFFFD6] bg-[#FFFFFF33]"
            placeholder="Username"
          />
          <input
            type="password"
            className="py-2 px-4 text-lg placeholder-[#FFFFFFD6] bg-[#FFFFFF33]"
            placeholder="Password"
          />

          <div className="flex justify-between gap-10">
            <button className="bg-[#1112129E] border-[1px] text-[#FFFFFF80] hover:text-white hover:bg-black/70 duration-300 border-black/70 text-2xl font-semibold uppercase grow-[5]">
              Login
            </button>
            <div className="flex flex-col font-semibold justify-start items-end text-lg grow-[1]">
              <a href="#" className="hover:text-teal-500">
                <p>Forgot Password</p>
              </a>
              <a href="#" className="hover:text-teal-500">
                <p>Register</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Circle of Doom */}
      <div className="min-w-[400px] min-h-[400px] rounded-full absolute bg-[#C4C4C400] border-[57px] border-[#00000040] left-[450px] bottom-[500px] z-0 pointer-events-none"></div>
    </div>
  );
};

export default App;
