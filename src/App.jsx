import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState("");
  const [num2, setNum2] = useState("");

  const handleClear = (e) => {
    setNumber("");
    setNum2("");
  };

  const handleAnswer = (e) => {
    setNum2(eval(number));
  };

  const handlePop = (e) => {
    setNumber(number.slice(0, -1));
    setNum2("");
  };

  const handleChange = (e) => {
    setNumber(number + e.target.value);
  };

  return (
    <main className="h-screen w-screen grid place-items-center bg-gradient-to-r from-[#B79891] to-[#94716B]">
      <div className="bg-zinc-800 scale-110 w-[360px] relative rounded">
        <div className="result absolute -right-7 top-5 h-[210px]">
          <div className="rounded text-right text-lg w-[180px] h-full p-5 pt-20 bg-white">
            {number}
          </div>
          <span className="absolute right-5 bottom-9 text-3xl font-semibold">
            {num2}
          </span>
        </div>
        <div className="btns ml-5 mr-5 mt-5 my-2 flex gap-2">
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="AC"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="C"
            onClick={handlePop}
          >
            C
          </button>
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="%"
            onClick={handleChange}
          >
            %
          </button>
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="/"
            onClick={handleChange}
          >
            /
          </button>
        </div>
        <div className="btns ml-5 mr-5 my-2 flex gap-2">
          <button
            className="w-9 h-9 rounded text-white"
            value="7"
            onClick={handleChange}
          >
            7
          </button>
          <button
            className="w-9 h-9 rounded text-white"
            value="8"
            onClick={handleChange}
          >
            8
          </button>
          <button
            className="w-9 h-9 rounded text-white"
            value="9"
            onClick={handleChange}
          >
            9
          </button>
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="*"
            onClick={handleChange}
          >
            *
          </button>
        </div>
        <div className="btns ml-5 mr-5 my-2 flex gap-2">
          <button
            className="w-9 h-9 rounded text-white"
            value="4"
            onClick={handleChange}
          >
            4
          </button>
          <button
            className="w-9 h-9 rounded text-white"
            value="5"
            onClick={handleChange}
          >
            5
          </button>
          <button
            className="w-9 h-9 rounded text-white"
            value="6"
            onClick={handleChange}
          >
            6
          </button>
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="-"
            onClick={handleChange}
          >
            -
          </button>
        </div>
        <div className="btns ml-5 mr-5 my-2 flex gap-2">
          <button
            className="w-9 h-9 rounded text-white"
            value="1"
            onClick={handleChange}
          >
            1
          </button>
          <button
            className="w-9 h-9 rounded text-white"
            value="2"
            onClick={handleChange}
          >
            2
          </button>
          <button
            className="w-9 h-9 rounded text-white"
            value="3"
            onClick={handleChange}
          >
            3
          </button>
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="+"
            onClick={handleChange}
          >
            +
          </button>
        </div>
        <div className="btns ml-5 mr-5 mb-5 flex gap-2">
          <button
            className="w-9 h-9 rounded text-white"
            value="0"
            onClick={handleChange}
          >
            0
          </button>
          <button
            className="w-9 h-9 rounded text-zinc-400"
            value="."
            onClick={handleChange}
          >
            .
          </button>
          <button
            className="w-[80px] h-9 bg-white/20  rounded text-zinc-400"
            value="="
            onClick={handleAnswer}
          >
            =
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
