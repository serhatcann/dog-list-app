import DogInfo from './DogInfo';
import styled from 'styled-components';
import Button from '../../UI/Button';
import { voteDogsApi } from '../../app/utils';
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

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
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

const VoteButton = styled(Button)`
	&& {
		margin: 0 10px;
	}
`;

const Dog = ({ img, id, breeds }) => {
	const VoteHandler = async (vote) => {
		const response = await voteDogsApi({ imageId: id, vote: vote });
		alert(response.message);
	};
	return (
		<Wrapper key={id}>
			<Img src={img} alt={id} />
			<ButtonWrapper>
				<VoteButton
					onClick={() => {
						VoteHandler(1);
					}}
					rgb='0,200,0'>
					Yay
				</VoteButton>
				<VoteButton
					rgb='200,0,0'
					onClick={() => {
						VoteHandler(0);
					}}>
					Nay
				</VoteButton>
			</ButtonWrapper>
			{breeds &&
				breeds.map((breed) => {
					return <DogInfo key={breed.name + breed.id} breeds={breeds} />;
				})}
		</Wrapper>
	);
};

export default Dog;
