import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
	test('renders Button text from props', () => {
		const { getByText } = render(<Button children='Test'></Button>);
		expect(getByText(/Test/i)).toBeInTheDocument();
	});
});
