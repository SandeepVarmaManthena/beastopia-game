import Beastcard from "../components/Beastcard"
import Header from "../components/Header"
import beastOne from "../assets/beasts/beast-1.webp"
import beastTwo from "../assets/beasts/beast-2.webp"
import beastThree from "../assets/beasts/beast-3.webp"

const Homepage = () => {
  return (
    <>

      <div className="main_wrapper bg-gray-800 text-white min-h-screen">
        <Header />
        <div className="about_beasts flex flex-row justify-evenly items-center gap-4 p-4">
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
    </>
  )
}

export default Homepage