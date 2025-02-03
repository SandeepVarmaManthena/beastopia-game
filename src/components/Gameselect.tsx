import { useState } from "react"

const Gameselect = () => {

    const [selectMode,SetSelectMode] = useState('multiplayer');

  return (
    <div className="game_div flex flex-row items-center justify-between w-[95%] px-[40px] py-[32px] bg-gray-900 m-auto shadow-lg rounded-lg border-b-4 border-[#F0A500] mt-6 mb-6">
          <div className="game_types w-[26%] flex flex-row items-center justify-between">
            <button className={`${selectMode === 'multiplayer' ? "bg-gray-900 px-4 py-3 text-2xl text-[#F0A500] font-bold border-1 border-b-4 border-[#F0A500] rounded-md transition-transform duration-200 ease-in-out transform active:scale-90" : "px-4 py-3 text-lg opacity-35 text-[#F0A500] font-bold border-1 border-b-4 border-[#F0A500] rounded-md transition-transform duration-200 ease-in-out transform active:scale-90"} cursor-pointer`} onClick={() => SetSelectMode('multiplayer')}>Multiplayer</button>
            <div className="line border-2 border-[#F0A500] h-14"></div>
            <button className={`${selectMode === 'computer' ? "bg-gray-900 px-4 py-3 text-2xl text-[#F0A500] font-bold border-1 border-b-4 border-[#F0A500] rounded-md transition-transform duration-200 ease-in-out transform active:scale-90" : "px-4 py-3 text-lg opacity-35 text-[#F0A500] font-bold border-1 border-b-4 border-[#F0A500] rounded-md transition-transform duration-200 ease-in-out transform active:scale-90"} cursor-pointer`} onClick={() => SetSelectMode('computer')}>Computer</button>
          </div>
          <div className="horizontal_line border-2 border-dashed border-[#F0A500] w-[56%]"></div>
          <div className="start_div">
            <button className="bg-gray-900 px-4 py-3 text-2xl text-[#F0A500] font-bold border-1 border-b-4 border-[#F0A500] rounded-md cursor-pointer transition-transform duration-200 ease-in-out transform active:scale-90 ">Enter Lobby</button>
          </div>
    </div>
  )
}

export default Gameselect