import { useEffect, useState } from "react";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";
import PropTypes from 'prop-types';


const Available = ({handleSelectedPlayer}) => {
    const [playersList, setPlayersList] = useState([]);

    useEffect(() =>{
        fetch("players.json")
        .then(res => res.json())
        .then(data => setPlayersList(data))
         }, []);

    return (
        
        <div className="max-w-screen-2xl mx-auto m-3 pb-60">
            <h2 className='text-3xl font-bold pb-5'>Available Players</h2>
            <div className="grid md:grid-cols-3 gap-5">
            {
                playersList.map((player, idx) => (<AvailablePlayer handleSelectedPlayer={handleSelectedPlayer} key={idx} player={player} ></AvailablePlayer>))
            }
            </div>
        </div>
    );
};

Available.propTypes = {
    handleSelectedPlayer: PropTypes.func
};

export default Available;