import { useDispatch } from 'react-redux';
import { getDogs } from '../app/dogsSlice';
import styled from 'styled-components';

const Button = styled.button`
	border: solid 1px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	padding: 10px 20px;
	background-color: #ffffff;
	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}
`;

const Header = () => {
	const dispatch = useDispatch();

	const loadDogs = (params) => {
		dispatch(getDogs());
	};

	return (
		<div>
			<h1>DOG LIST</h1>
			<p>When clicked below button, goodies 10 dog will be loaded.</p>
			<Button onClick={loadDogs}>Load Dogs 🐶</Button>
		</div>
	);
};

export default Header;
