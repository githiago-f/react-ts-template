import React from 'react';
import { Props } from '@comp/card';

const Card = (props: Props) => {
  const { card: { title } } = props;

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
