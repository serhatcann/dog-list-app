import DogInfo from './DogInfo';
import styled from 'styled-components';

const Wrapper = styled.div`
	/* &:hover {
		background: rgba(0, 0, 0, 0.1);
	} */
	margin: 10px;
	padding: 10px;
	border: solid 1px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	width: 500px;
`;

const Img = styled.img`
	height: 300px;
	max-width: 100%;
`;

const Dog = ({ img, id, breeds }) => {
	return (
		<Wrapper key={id}>
			<Img src={img} alt={id} />
			{breeds &&
				breeds.map((breed) => {
					return <DogInfo key={breed.name + breed.id} breeds={breeds} />;
				})}
		</Wrapper>
	);
};

export default Dog;
