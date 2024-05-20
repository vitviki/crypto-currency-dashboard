import cryptoHome from "../assets/crypto-home.svg";

const Header = () => {
  return (
    <header className="w-full h-24  shadow-lg flex items-center justify-center">
      <div className="w-[90%] m-auto flex items-center justify-center xl:justify-start">
        <img src={cryptoHome} alt="crypto home" width={50} />
        <h1 className="ml-2 font-palanquin font-bold text-3xl relative">
          <span className="uppercase bg-red-500 px-1 text-white rounded-sm font-montserrat">
            Crypto
          </span>{" "}
          <span className=" absolute uppercase text-lg top-[40%] ml-1">
            Dashboard
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
