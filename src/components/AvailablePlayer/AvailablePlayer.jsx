import PropTypes from 'prop-types';

const AvailablePlayer = ({player, handleSelectedPlayer}) => {
    const {name, img, country, role, bowling_hand, batting_hand, price, rating} = player;

    return (
        <div className="border-2 p-6 rounded-2xl">
            <div className="h-[300px] pb-3">
            <img className="w-full h-full object-cover object-top rounded-xl" src={img} alt="player-image" />
            </div>
            <h3 className="text-xl font-semibold" >{name}</h3>
            <div className="flex justify-between items-center py-3">
            <h3 className="font-medium">{country}</h3>
            <h3 className="bg-gray-300 px-3 py-1 rounded-md font-medium" >{role}</h3>
            </div>
            <hr/>
            <div className="flex justify-between items-center py-2">
                <h3 className="font-medium">Rating</h3>
                <h3 className="font-medium">{rating}</h3>
            </div>
            <div className="flex justify-between items-center py-2">
                <h3 className="font-medium">{batting_hand} Handed Batter</h3>
                <h3 className="font-medium">{bowling_hand} Handed Bowler</h3>
            </div>
            <div className="flex justify-between items-center py-2">
                <h3 className="font-medium" >Price: ${price}</h3>
                <button onClick={() => handleSelectedPlayer(player)} className="px-3 py-2 rounded-lg font-medium bg-yellow-400">Select Player</button>
            </div>
            
        </div>
    );
};

AvailablePlayer.propTypes = {
    handleSelectedPlayer: PropTypes.func,
    player: PropTypes.object.isRequired
};

export default AvailablePlayer;