import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
	<SpeechProvider appId="215cb146-8bbd-43b4-a517-b07b454ec65c" language="en-US">
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,
	document.getElementById('root')
);
