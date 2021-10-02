import styled from 'styled-components';

const DogInfoTitle = styled.div`
	font-weight: bold;
	white-space: nowrap;
	text-align: left;
	width: 50%;
`;
const DogInfoValue = styled.div`
	text-align: left;
	width: 50%;
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
				<DogInfoValue>{breed[0].name}</DogInfoValue>
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Breed:</DogInfoTitle>
				<DogInfoValue>{breed[0].breed_group}</DogInfoValue>
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Breed Details:</DogInfoTitle>
				<DogInfoValue>{breed[0].bred_for}</DogInfoValue>
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Temperament:</DogInfoTitle>
				<DogInfoValue>{breed[0].temperament}</DogInfoValue>
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Height(Imperical/Metric):</DogInfoTitle>
				<DogInfoValue>
					{breed[0].height.imperial}/{breed[0].height.metric}
				</DogInfoValue>
			</DogInfoLine>
			<DogInfoLine>
				<DogInfoTitle>Weight(Imperical/Metric):</DogInfoTitle>
				<DogInfoValue>
					{breed[0].weight.imperial}/{breed[0].weight.metric}
				</DogInfoValue>
			</DogInfoLine>
		</>
	);
};

export default DogInfo;
