import logo from "../../assets/images/logo.png";
import bgShadow from "../../assets/images/bg-shadow.png";
import banner from "../../assets/images/banner-main.png";
import PropTypes from "prop-types";

const Header = ({ addFreeCredit, credit, creditClaimed }) => {
  return (
    <div className="max-w-screen-2xl mx-auto m-8">
      <nav className="flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="flex items-center justify-center gap-4 text-[#131313B3]">
          <ul className="flex gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Teams</li>
            <li className="cursor-pointer">Fixtures</li>
            <li className="cursor-pointer">About</li>
          </ul>
          <button className="border-2 rounded-lg px-2 py-1 font-semibold">
            <span>{credit}</span> Coin
          </button>
        </div>
      </nav>
      <div
        className="bg-[#131313] bg-cover rounded-xl flex flex-col items-center py-20 my-8 gap-y-8"
        style={{ backgroundImage: `url(${bgShadow})` }}
      >
        <img src={banner} alt="banner" />
        <h2 className="text-4xl text-white font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <h3 className="text-2xl text-white font-medium">
          Beyond Boundaries Beyond Limits
        </h3>
        <button
          onClick={addFreeCredit}
          disabled={creditClaimed}
          className={`px-4 py-3 rounded-lg font-semibold ${
            creditClaimed ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400"
          }`}
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  addFreeCredit: PropTypes.func,
  credit: PropTypes.number,
  creditClaimed: PropTypes.bool,
};

export default Header;
