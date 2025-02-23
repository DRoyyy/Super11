import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ player, handleDeletePlayer }) => {
  const { id, name, role, img, price } = player;
  return (
    <div className="flex items-center justify-between border-gray-300 border p-4 rounded-xl">
      <div className="flex items-center gap-5">
        <div className="h-[70px] w-[60px]">
          <img
            className="w-full h-full object-cover object-top rounded-xl"
            src={img}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold pb-2">{name}</h2>
          <h2 className="text-[#13131399]">{role}</h2>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDeletePlayer(id, price)}
          className="text-3xl"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
  handleDeletePlayer: PropTypes.func,
};

export default SelectedPlayer;
