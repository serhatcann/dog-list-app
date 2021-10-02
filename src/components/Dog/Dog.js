import DogInfo from './DogInfo';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 10px;
	padding: 10px;
	border: solid 1px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	width: 500px;
	@media (min-width: 770px) and (max-width: 1030px) {
		width: 100%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Img = styled.img`
	height: 300px;
	max-width: 100%;
	@media (min-width: 770px) and (max-width: 1030px) {
		float: left;
		margin-right: 10px;
		height: 100%;
		width: 400px;
	}
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
