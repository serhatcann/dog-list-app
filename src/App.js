import React from 'react';
import './App.css';
import Header from './components/Header';
import DogList from './components/Dog/DogList';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function App() {
	return (
		<Wrapper className='App'>
			<Header />
			<DogList></DogList>
		</Wrapper>
	);
}

export default App;
