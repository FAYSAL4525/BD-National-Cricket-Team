import React from 'react';
import './CreateTeam.css';

const CreateTeam = (props) => {
    const{ playername, born, age, Role, batting_style, bowling_style, img, income, team }=props.players;
    const style={
        marginLeft:"10px",
        border:"1px solid red"
    };
    return (
        <div className="team-details1">
            <div>
            <img  src={img} alt=""/>
            <h2>{playername}</h2>
            <p>Team: {team}</p>
            <p>Role: {Role}</p>
            <p>Income: {income}</p>
        </div>
        </div>
    );
};

export default CreateTeam;