import Beastcard from "../components/Beastcard"
import Header from "../components/Header"
import beastOne from "../assets/beasts/beast-1.webp"
import beastTwo from "../assets/beasts/beast-2.webp"
import beastThree from "../assets/beasts/beast-3.webp"
import Gameselect from "../components/Gameselect"

const Homepage = () => {

  return (
    <>

      <div className="main_wrapper bg-gray-800 text-white min-h-screen">
        <Header />
        <Gameselect/>
        <div className="about_beasts flex flex-col justify-center items-center gap-4 p-4 pb-6">
          <h2 className="text-4xl text-[#F0A500] bg-gray-900 px-9 py-3 border-b-3 border-[#F0A500] rounded-lg">Beasts</h2>
          <div className="beasts flex flex-row justify-evenly items-center gap-4 p-4 pb-6 w-[100%]">
          <Beastcard
            image={beastOne}
            name="Floraburst"
            desc="Guardian of Nature"
            power={85}
            speed={75}
            healing={95}
          />
          <Beastcard
            image={beastTwo}
            name="Aquarix"
            desc="Ocean Mystic"
            power={70}
            speed={90}
            healing={85}
          />
          <Beastcard
            image={beastThree}
            name="Emberling"
            desc="Fire Spirit"
            power={95}
            speed={85}
            healing={65}
          />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage