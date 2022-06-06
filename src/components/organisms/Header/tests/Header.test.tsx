import Button from 'components/atoms/Button/Button';
import { render } from 'utils/tests/test-utils';
import Header from '../Header';

describe('<Header />', () => {
	it('Snapshot', () => {
		const onClick = jest.fn();
		const { container } = render(
			<Header>
				<Button variant='w-20 h-20 z-10' onClick={onClick} />
			</Header>
		);
		expect(container).toMatchSnapshot();
	});
});
