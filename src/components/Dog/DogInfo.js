import styled from 'styled-components';

const DogInfoTitle = styled.div`
	font-weight: bold;
	margin-right: 15px;
	white-space: nowrap;
`;

const DogInfoLine = styled.div`
	&:last-child {
		border: none;
	}
	display: flex;
	border-bottom: solid 1px rgba(0, 0, 0, 0.2);
	padding: 7px;
`;

const DogInfo = ({ breeds: breed }) => {
	return (
		<>
			<DogInfoLine>
				<DogInfoTitle>Name:</DogInfoTitle>
				{breed[0].name}
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Breed:</DogInfoTitle>
				{breed[0].breed_group}
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Breed Details:</DogInfoTitle>
				{breed[0].bred_for}
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Temperament:</DogInfoTitle>
				{breed[0].temperament}
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Height(Imperical/Metric):</DogInfoTitle>
				{breed[0].height.imperial}/{breed[0].height.metric}
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Weight(Imperical/Metric):</DogInfoTitle>
				{breed[0].weight.imperial}/{breed[0].weight.metric}
			</DogInfoLine>
		</>
	);
};

export default DogInfo;
