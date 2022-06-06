import { render } from 'utils/tests/test-utils';
import Button from '../Button';

describe('<Button />', () => {
	it('Snapshot', () => {
		const onClick = jest.fn();
		const { container, getByText } = render(
			<Button
				variant='justify-center w-24 h-12 rounded-lg bg-grey
						dark:bg-mine-shaft-500 dark:text-white transition-colors'
				onClick={onClick}
				text='Cancel'
			/>
		);
		expect(container).toMatchSnapshot();
		expect(getByText('Cancel')).toBeTruthy();
	});
});
