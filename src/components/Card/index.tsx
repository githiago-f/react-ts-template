import React from 'react';

const Card = (props: { title: string }) => {
  const { title } = props;
  
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
