import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PropTypes from "prop-types";

const SelectedPlayersList = ({
  selectedPlayersList,
  handleDeletePlayer,
  handleShowAvailable,
}) => {
  return (
    <div className="max-w-screen-2xl mx-auto m-3 flex flex-col gap-5 pb-60">
      <h2 className="text-3xl font-bold">
        Selected Players ({selectedPlayersList.length}/11)
      </h2>
      {selectedPlayersList.map((player, idx) => (
        <SelectedPlayer
          key={idx}
          player={player}
          handleDeletePlayer={handleDeletePlayer}
        ></SelectedPlayer>
      ))}
      <button
        onClick={() => handleShowAvailable(true)}
        className={
          "bg-yellow-400 w-[180px] font-semibold px-5 py-3 border rounded-lg"
        }
      >
        Add More Player
      </button>
    </div>
  );
};

SelectedPlayersList.propTypes = {
  selectedPlayersList: PropTypes.object.isRequired,
  handleDeletePlayer: PropTypes.func,
  handleShowAvailable: PropTypes.func,
};

export default SelectedPlayersList;
