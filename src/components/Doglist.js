import Dog from './Dog/Dog';
const DUMMY_DOGS = [
	{
		breeds: [
			{
				weight: { imperial: '85 - 140', metric: '39 - 64' },
				height: { imperial: '24 - 26', metric: '61 - 66' },
				id: 244,
				name: 'Tibetan Mastiff',
				breed_group: 'Working',
				life_span: '10 - 14 years',
				temperament: 'Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective',
				reference_image_id: 'SkM9sec47',
			},
		],
		id: 'SkM9sec47',
		url: 'https://cdn2.thedogapi.com/images/SkM9sec47_1280.jpg',
		width: 1600,
		height: 1375,
	},
	{ breeds: [], id: 'IYnbVDoBJ', url: 'https://cdn2.thedogapi.com/images/IYnbVDoBJ.jpg', width: 1080, height: 1350 },
	{
		breeds: [
			{
				weight: { imperial: '90 - 120', metric: '41 - 54' },
				height: { imperial: '28 - 34', metric: '71 - 86' },
				id: 5,
				name: 'Akbash Dog',
				bred_for: 'Sheep guarding',
				breed_group: 'Working',
				life_span: '10 - 12 years',
				temperament: 'Loyal, Independent, Intelligent, Brave',
				origin: '',
				reference_image_id: '26pHT3Qk7',
			},
		],
		id: 'W93JBCUzz',
		url: 'https://cdn2.thedogapi.com/images/W93JBCUzz.jpg',
		width: 1124,
		height: 928,
	},
	{
		breeds: [
			{
				weight: { imperial: '35 - 65', metric: '16 - 29' },
				height: { imperial: '23 - 28', metric: '58 - 71' },
				id: 213,
				name: 'Saluki',
				bred_for: 'Coursing gazelle and hare',
				breed_group: 'Hound',
				life_span: '12 - 14 years',
				temperament: 'Aloof, Reserved, Intelligent, Quiet',
				reference_image_id: 'fjFIuehNo',
			},
		],
		id: 'k4WVD0wfC',
		url: 'https://cdn2.thedogapi.com/images/k4WVD0wfC.jpg',
		width: 960,
		height: 778,
	},
	{
		breeds: [
			{
				weight: { imperial: '17 - 23', metric: '8 - 10' },
				height: { imperial: '13.5 - 16.5', metric: '34 - 42' },
				id: 222,
				name: 'Shiba Inu',
				bred_for: 'Hunting in the mountains of Japan, Alert Watchdog',
				breed_group: 'Non-Sporting',
				life_span: '12 - 16 years',
				temperament: 'Charming, Fearless, Keen, Alert, Confident, Faithful',
				reference_image_id: 'Zn3IjPX3f',
			},
		],
		id: 'RStuTUw66',
		url: 'https://cdn2.thedogapi.com/images/RStuTUw66.jpg',
		width: 1080,
		height: 1162,
	},
];
const DogList = () => {
	return (
		<>
			{DUMMY_DOGS &&
				DUMMY_DOGS.map((dog) => {
					return <Dog key={dog.id} img={dog.url} breeds={dog.breeds}></Dog>;
				})}
			;{!DUMMY_DOGS && <p>No data!</p>}
		</>
	);
};

export default DogList;
