import { useDispatch } from 'react-redux';
import { getDogs } from '../app/dogsSlice';
import Button from '../UI/Button';

const Header = () => {
	const dispatch = useDispatch();

	const loadDogs = (params) => {
		dispatch(getDogs());
	};

	return (
		<div>
			<h1>DOG LIST</h1>
			<p>When clicked below button, goodies 10 dog will be loaded.</p>
			<Button onClick={loadDogs} rgb='0,0,0'>
				Load Dogs 🐶
			</Button>
		</div>
	);
};

export default Header;
