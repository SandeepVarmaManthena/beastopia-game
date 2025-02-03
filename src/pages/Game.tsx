import { IoClose } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";
import BattleField from "../components/BattleField";
import BeastImg1 from '../assets/beasts/beast-1.webp'
import BeastImg2 from '../assets/beasts/beast-2.webp'
import BeastImg3 from '../assets/beasts/beast-3.webp'


const Game = () => {
  return (
    <>
        <section className="game_wrapper flex flex-col w-[80%] m-auto gap-4 py-6">
            <div className="top_section flex flex-row justify-between items-center py-4">
                <button className="bg-[#Dc2626] px-5 py-4 font-bold rounded-lg flex flex-row items-center gap-1 text-lg"><IoClose className="text-3xl font-bold"/> Quit Game</button>
                <button className="bg-[#16a34a] px-5 py-4 font-bold rounded-lg flex flex-row items-center gap-1 text-lg"><LuPackage className="text-2xl font-bold" /> Item Pack</button>
            </div>
            <div className="bottom_section flex flex-row items-center justify-between">
                <div className="player_one w-[40%]">
                    <div className="battle_feild flex flex-col gap-2 items-start">
                        <p className="text-xl font-bold pl-1">Player 1</p>
                        <div className="feild border-[#F0A500] border-1 rounded-md">
                            <BattleField img={BeastImg1}/>
                        </div>
                    </div>
                    <div className="pavilion flex flex-row items-center justify-between py-6 w-[100%]">
                        <div className="p_card1 w-[26%] border-l-3 border-[#F0A500] px-2 py-4 bg-gray-900 rounded-md flex flex-col items-center gap-2">
                            <img src={BeastImg1} alt="" />
                            <p className="text-md font-bold">Beast 1</p>
                        </div>
                        <div className="p_card2 w-[26%] border-l-3 border-[#F0A500] px-2 py-4 bg-gray-900 rounded-md flex flex-col items-center gap-2">
                            <img src={BeastImg2} alt="" />
                            <p className="text-md font-bold">Beast 2</p>
                        </div>
                        <div className="p_card3  w-[26%] border-l-3 border-[#F0A500] px-2 py-4 bg-gray-900 rounded-md flex flex-col items-center gap-2">
                            <img src={BeastImg3} alt="" />
                            <p className="text-md font-bold">Beast 3</p>
                        </div>
                    </div>
                </div>
                <div className="player_two w-[40%] flex flex-col items-end">
                    <div className="battle_feild flex flex-col gap-2 items-start">
                        <p className="text-xl font-bold pl-1">Player 2</p>
                        <div className="feild border-1 border-[#F0A500] rounded-md">
                            <BattleField img={BeastImg2}/>
                        </div>
                    </div>
                    <div className="pavilion flex flex-row items-center justify-between py-6 w-[100%]">
                        <div className="p_card1 w-[26%] border-l-3 border-[#F0A500] px-2 py-4 bg-gray-900 rounded-md flex flex-col items-center gap-2">
                            <img src={BeastImg1} alt="" />
                            <p className="text-md font-bold">Beast 1</p>
                        </div>
                        <div className="p_card2 w-[26%] border-l-3 border-[#F0A500] px-2 py-4 bg-gray-900 rounded-md flex flex-col items-center gap-2">
                            <img src={BeastImg2} alt="" />
                            <p className="text-md font-bold">Beast 2</p>
                        </div>
                        <div className="p_card3  w-[26%] border-l-3 border-[#F0A500] px-2 py-4 bg-gray-900 rounded-md flex flex-col items-center gap-2">
                            <img src={BeastImg3} alt="" />
                            <p className="text-md font-bold">Beast 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Game