import React from 'react';
import Theme from './theme';
import { BaseRoutes } from 'router';

const App = () => {
	return (
		/**
         * What is <React.StrictMode>?
         * (https://pt-br.reactjs.org/docs/strict-mode.html)
         */
		<React.StrictMode>
			<Theme>
				<BaseRoutes />
			</Theme>
		</React.StrictMode>
	);
};

export default App;
