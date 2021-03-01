import React, { useEffect, useState } from 'react';
import playersData from '../../fakedata/playersData';
import CreateTeam from '../CreateTeam/CreateTeam';
import Navbar from '../Navbar/Navbar';
import PlayersCount from '../PlayerCount/PlayersCount';
import PlayersInfo from '../PlayersInfo/PlayersInfo';
import './PlayersDisplay.css';

const PlayersDisplay = () => {
    const [players, setPlayers] = useState([]);
    const [AddPlayer,setAddPlayer] = useState([]);
    useEffect(() => {
        setPlayers(playersData);
        //console.log(playersData);
    }, []);
    //console.log(players);
    const handleAddPlayers=(playerinfo)=>{
        const newCard =[...AddPlayer,playerinfo];
        setAddPlayer(newCard);
   console.log("added");
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="players-container">
                <div className="players-info-container">
                    {
                        players.map(playerinfo => <PlayersInfo playerinfo={playerinfo} handleAddPlayers={handleAddPlayers}></PlayersInfo>)
                    }
                </div>
                <div>
                    <PlayersCount PlayersCount={AddPlayer}></PlayersCount>
                    {
                        AddPlayer.map(players=><CreateTeam players={players}></CreateTeam>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default PlayersDisplay;