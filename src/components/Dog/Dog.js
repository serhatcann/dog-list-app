import DogInfo from './DogInfo';

const Dog = ({ breeds, img }) => {
	return (
		<div>
			<img src={img} alt='' />
			{breeds &&
				breeds.map((breed) => {
					return <div>{breed.name}</div>;
				})}
			<DogInfo></DogInfo>
		</div>
	);
};

export default Dog;
