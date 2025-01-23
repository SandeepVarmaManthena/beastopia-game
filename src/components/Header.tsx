import WalletConnect from "./WalletConnect"

const Header = () => {
  return (
    <>
      <section className="flex flex-row px-3 py-3 justify-between items-center bg-gray-800 text-white">
        <h1 className="text-2xl font-bold text-[#F0A500]">
          Beastopia
        </h1>
        <WalletConnect />
      </section>
    </>
  )
}

export default Header