import React from 'react';
import './PlayersCount.css';

const PlayersCount = (props) => {
    const totalinfo = props.PlayersCount;
    //const Total =total.reduce((Total,sum) =>Total+sum.income,0)
    const Total = totalinfo.reduce((sum, totalinfo) => sum + totalinfo.income, 0);
    const formatNumber = number => {
        const parse = number.toFixed(2);
        return parse;
    }
    return (
        <div className="heading">
            <h5>Total Players: {totalinfo.length}</h5>
            <h6>Total Players Income: {formatNumber(Total)}</h6>

        </div>
    );
};

export default PlayersCount;