import { render, screen } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import fireEvent from '@testing-library/user-event';
import Dog from '../components/Dog/Dog';

describe('Header component', () => {
	test('renders DOG LIST as a text', () => {
		render(
			<Provider store={store}>
				<Header />
			</Provider>,
		);

		expect(screen.getByText(/DOG LIST/i)).toBeInTheDocument();
	});

	test('renders dogs if request succeeds', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [
				{
					breeds: [
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
					],
					id: 'HyWNfxc47',
					url: 'https://cdn2.thedogapi.com/images/HyWNfxc47_1280.jpg',
					width: 740,
					height: 430,
				},
			],
		});
		render(
			<Provider store={store}>
				<Header />
			</Provider>,
		);

		fireEvent.click(screen.getByText(/Load Dogs/i));

		const listItemElements = await screen.findAllByRole(Dog);
		expect(listItemElements).not.toHaveLength(0);
	});
});
