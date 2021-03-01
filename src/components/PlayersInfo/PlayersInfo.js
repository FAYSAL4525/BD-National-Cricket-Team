import React from 'react';
import './PlayersInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const PlayersInfo = (props) => {
    //console.log(props);
    const { playername, born, age, Role, batting_style, bowling_style, img, income, team } = props.playerinfo;
    const handleAddPlayers =props.handleAddPlayers;
    return (
        <div className="players-card">
           <div className="players-info">
           <img src={img} alt="" />
            <h2>{playername}</h2>
            <h5>Team: {team}</h5>
            <p>Age: {age}</p>
            <p>Born: {born}</p>
            <p>Role: {Role}</p>
            <p>Batting Style: {batting_style}</p>
            <p>Bowling Style: {bowling_style}</p>
            <p>Salary: {income}</p>
           </div>
            <div class="d-grid gap-2">
                <button onClick={()=>handleAddPlayers(props.playerinfo)} class="btn btn-dark" type="button"><span class="fs-5 p-3">Add <FontAwesomeIcon icon={faPlusSquare} /></span></button>
            </div>
        </div>
    );
};

export default PlayersInfo;