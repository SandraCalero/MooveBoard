import { render } from 'utils/tests/test-utils';
import Modal from '../Modal';

describe('<Modal />', () => {
	it('Snapshot', () => {
		const onConfirm = jest.fn();
		const onCancel = jest.fn();
		const { container, getByText } = render(
			<Modal
				title='Move post it to the trash'
				message='Are you sure you want to move this post it to the trash?'
				isModalOpen
				onConfirm={onConfirm}
				onCancel={onCancel}
			/>
		);
		expect(container).toMatchSnapshot();
		expect(getByText('Move post it to the trash')).toBeTruthy();
		expect(
			getByText('Are you sure you want to move this post it to the trash?')
		).toBeTruthy();
	});
});
