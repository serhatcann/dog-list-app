import React from 'react';
import './App.css';
import Header from './components/Header';
import Doglist from './components/Doglist';

function App() {
	return (
		<div className='App'>
			<Header />
			<Doglist></Doglist>
		</div>
	);
}

export default App;
