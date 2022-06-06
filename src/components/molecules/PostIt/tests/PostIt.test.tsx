import { render } from 'utils/tests/test-utils';
import PostIt from '../PostIt';

describe('<PostIt />', () => {
	it('Snapshot', () => {
		const showModal = jest.fn();
		const { container, getByText } = render(
			<PostIt id={1} content='Testing Post It' disabled showModal={showModal} />
		);
		expect(container).toMatchSnapshot();
		expect(getByText('Testing Post It')).toBeTruthy();
	});
});
