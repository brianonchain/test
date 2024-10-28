"use client";
import { useState } from "react";

export default function Custom() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [opacity, setOpacity] = useState(0.2);

  return (
    <div className="px-3 lg:px-12 py-12 grid grid-cols-[100%] lg:grid-cols-[auto,auto] justify-center justify-items-center items-stretch gap-16">
      <div className="w-[360px] h-[360px] flex items-center justify-center border bg-white">
        <div className="card w-[200px] h-[200px]" style={{ boxShadow: `${x}px ${y}px ${blur}px ${spread}px rgba(0,0,0,${opacity})` }}>
          200px x 200px
        </div>
      </div>
      <div className="w-full max-w-[500px] grid grid-cols-[max-content,minmax(50px,1fr),auto,min-content] grid-rows-[repeat(5,auto)_1fr] gap-x-2 gap-y-6 items-center">
        {/*--- x offset ---*/}
        <p className="">x offset</p>
        <div className="w-full flex items-center relative">
          <input className="w-full lg:w-[250px]" type="range" min="-50" max="50" onChange={(e) => setX(Number(e.currentTarget.value))} value={x} />
          <div className="absolute right-[50%] translate-x-[50%] top-[100%] flex gap-2 text-xl">
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setX(x - 1)}
            >
              &#129092;
            </div>
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setX(x + 1)}
            >
              &#129094;
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input className="w-[50px] text-end border outline-blue-500 rounded-md px-2 py-1" type="number" onChange={(e) => setX(Number(e.currentTarget.value))} value={x} />
          px
        </div>
        <button className="resetButton" onClick={() => setX(0)}>
          reset
        </button>

        {/*--- y offset ---*/}
        <p className="">y offset</p>
        <div className="w-full flex items-center relative">
          <input className="w-full lg:w-[250px]" type="range" min="-50" max="50" onChange={(e) => setY(Number(e.currentTarget.value))} value={y} />
          <div className="absolute right-[50%] translate-x-[50%] top-[100%] flex gap-2 text-xl">
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setY(y - 1)}
            >
              &#129092;
            </div>
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setY(y + 1)}
            >
              &#129094;
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input className="w-[50px] text-end border outline-blue-500 rounded-md px-2 py-1" type="number" onChange={(e) => setY(Number(e.currentTarget.value))} value={y} />
          px
        </div>
        <button className="resetButton" onClick={() => setY(0)}>
          reset
        </button>

        {/*--- blur ---*/}
        <p>blur</p>
        <div className="w-full flex items-center relative">
          <input className="w-full lg:w-[250px]" type="range" min="-100" max="100" onChange={(e) => setBlur(Number(e.currentTarget.value))} value={blur} />
          <div className="absolute right-[50%] translate-x-[50%] top-[100%] flex gap-2 text-xl">
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setBlur(blur - 1)}
            >
              &#129092;
            </div>
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setBlur(blur + 1)}
            >
              &#129094;
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input className="w-[50px] text-end border outline-blue-500 rounded-md px-2 py-1" type="number" onChange={(e) => setBlur(Number(e.currentTarget.value))} value={blur} />
          px
        </div>
        <button className="resetButton" onClick={() => setBlur(0)}>
          reset
        </button>

        {/*--- spread ---*/}
        <p>spread</p>
        <div className="w-full flex items-center relative">
          <input className="w-full lg:w-[250px]" type="range" min="-100" max="100" onChange={(e) => setSpread(Number(e.currentTarget.value))} value={spread} />
          <div className="absolute right-[50%] translate-x-[50%] top-[100%] flex gap-2 text-xl">
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setSpread(spread - 1)}
            >
              &#129092;
            </div>
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setSpread(spread + 1)}
            >
              &#129094;
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input
            className="w-[50px] text-end border outline-blue-500 rounded-md px-2 py-1"
            type="number"
            onChange={(e) => setSpread(Number(e.currentTarget.value))}
            value={spread}
          />
          px
        </div>
        <button className="resetButton" onClick={() => setSpread(0)}>
          reset
        </button>

        {/*--- opacity ---*/}
        <p>opacity</p>
        <div className="w-full flex items-center relative">
          <input className="w-full lg:w-[250px]" type="range" min="0" max="1" step="0.01" onChange={(e) => setOpacity(Number(e.currentTarget.value))} value={opacity} />
          <div className="absolute right-[50%] translate-x-[50%] top-[100%] flex gap-2 text-xl">
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setOpacity(Number((opacity - 0.01).toFixed(2)))}
            >
              &#129092;
            </div>
            <div
              className="h-[24px] w-[30px] flex items-center justify-center border rounded-md cursor-pointer text-slate-500 hover:text-slate-600 select-none"
              onClick={() => setOpacity(Number((opacity + 0.01).toFixed(2)))}
            >
              &#129094;
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input
            className="w-[52px] text-end border outline-blue-500 rounded-md px-2 py-1"
            type="number"
            onChange={(e) => setOpacity(Number(e.currentTarget.value))}
            value={opacity}
          />
        </div>
        <button className="resetButton" onClick={() => setOpacity(0.2)}>
          reset
        </button>
        <div className="col-span-4 text-center">{`shadow-[${x}px_${y}px_${blur}px_${spread}px_rgba(0,0,0,${opacity})]`}</div>
      </div>
    </div>
  );
}
