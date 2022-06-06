import { render } from 'utils/tests/test-utils';
import DeletedPostIt from '../DeletedPostIt';

describe('<DeletedPostIt />', () => {
	it('Snapshot', () => {
		const showModal = jest.fn();
		const { container, getByText } = render(
			<DeletedPostIt
				id={1}
				content='Testing Deleted Post It'
				showModal={showModal}
			/>
		);
		expect(container).toMatchSnapshot();
		expect(getByText('Testing Deleted Post It')).toBeTruthy();
	});
});
