import WalletConnect from "./WalletConnect"

const Header = () => {
  return (
    <>
      <section className="flex flex-row px-4 py-4 justify-between items-center bg-gray-900 text-white shadow-lg sticky top-0 z-50 border-b-2 border-[#F0A500]">
        <h1 className="text-2xl font-bold text-[#F0A500]">
          Beastopia
        </h1>
        <WalletConnect />
      </section>
    </>
  )
}

export default Header