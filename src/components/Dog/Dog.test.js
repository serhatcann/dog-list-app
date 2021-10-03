import { render, screen } from '@testing-library/react';
import Dog from './Dog';
import DogInfo from './DogInfo';

describe('Dog component', () => {
	test('renders Dog image', () => {
		render(<Dog img='https://cdn2.thedogapi.com/images/Sypubg54Q_1280.jpg' id='id1'></Dog>);

		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('src', 'https://cdn2.thedogapi.com/images/Sypubg54Q_1280.jpg');
		expect(image).toHaveAttribute('alt', 'id1');
	});

	test('renders Dog Info from Dog props', () => {
		render(
			<DogInfo
				breeds={[
					{
						weight: {
							imperial: '28',
							metric: '13',
						},
						height: {
							imperial: '11 - 12',
							metric: '28 - 30',
						},
						id: 113,
						name: 'French Bulldog',
						bred_for: 'Lapdog',
						breed_group: 'Non-Sporting',
						life_span: '9 - 11 years',
						temperament: 'Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright',
						reference_image_id: 'HyWNfxc47',
					},
				]}></DogInfo>,
		);

		expect(screen.getByText(/French Bulldog/)).toBeInTheDocument();
	});
});
