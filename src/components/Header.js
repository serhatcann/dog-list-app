import { useDispatch } from 'react-redux';
import { getDogs } from '../app/dogsSlice';

const Header = () => {
	const dispatch = useDispatch();

	const loadDogs = (params) => {
		dispatch(getDogs());
	};

	return (
		<div>
			<h1>DOG LIST</h1>
			<p>When clicked below button, goodies 10 dog will be loaded.</p>
			<button onClick={loadDogs}>Load Dogs</button>
		</div>
	);
};

export default Header;
