import { BrowserRouter } from 'react-router-dom';
import { render } from 'utils/tests/test-utils';
import TrashBinLink from '../TrashBinLink';

describe('<TrashBinLink />', () => {
	it('Snapshot', () => {
		const { container, getByText } = render(
			<BrowserRouter>
				<TrashBinLink />
			</BrowserRouter>
		);
		expect(container).toMatchSnapshot();
		expect(getByText('Trash Bin')).toBeTruthy();
	});
});
