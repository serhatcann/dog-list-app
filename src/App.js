import React from 'react';
import './App.css';
import Header from './components/Header';
import DogList from './components/DogList';

function App() {
	return (
		<div className='App'>
			<Header />
			<DogList></DogList>
		</div>
	);
}

export default App;
