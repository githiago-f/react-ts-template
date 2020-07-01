import React from 'react';

/**
 * @description separate this from index.tsx file because its responsibilities is just manage styles and structure
 */
const Theme = (props: Props<{}>) => {
	return (
		<>
			{props?.children}
		</>
	);
};

export default Theme;
