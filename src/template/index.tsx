import React from 'react';
import Theme from './theme';

const App = (props: Props<{}>) => {
	return (
		<React.StrictMode>
			<Theme>
				{props?.children}
			</Theme>
		</React.StrictMode>
	);
};

export default App;
