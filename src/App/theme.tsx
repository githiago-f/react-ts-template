import React from 'react';
import { StyledBase } from 'components/StyledBase';

/**
 * @description separate this from index.tsx file because it's responsibilities are just manage styles and structure
 */
const Theme = (props: Props<{}>) => {
  return (
    <>
      {props?.children}
      <StyledBase />
    </>
  );
};

export default Theme;
