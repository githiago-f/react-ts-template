import React from 'react';

const Card = ({ title }: TCard) => {
    return (
        <>
            <div className="card-head">
                <h3>{title}</h3>
            </div>
            <div className="card-body"></div>
        </>
    );
};

export default Card;
