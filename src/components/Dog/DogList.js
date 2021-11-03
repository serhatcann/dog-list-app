import Dog from './Dog';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const DogListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 20px;
	justify-content: center;
`;

const DogList = () => {
	const [dogs, setDogs] = useState([]);
	const dogsState = useSelector((state) => state.dogs);

	useEffect(() => {
		setDogs(dogsState.dogs);
	}, [dogsState.dogs]);
	return (
		<DogListWrapper>
			{dogs &&
				dogs.map((dog) => {
					return <Dog key={dog.id} img={dog.url} id={dog.id} breeds={dog.breeds}></Dog>;
				})}
			{!dogs && <p>No data!</p>}
		</DogListWrapper>
	);
};

export default DogList;
