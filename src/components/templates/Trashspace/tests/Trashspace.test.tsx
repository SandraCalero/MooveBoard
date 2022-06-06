import { BrowserRouter } from 'react-router-dom';
import { addPostItToTrash } from 'redux/slices/trashspace';
import store from 'redux/store';
import { render } from 'utils/tests/test-utils';
import Trashspace from '../Trashspace';

describe('<Trashspace />', () => {
	it('Snapshot', () => {
		store.dispatch(
			addPostItToTrash({
				id: 1,
				content: 'Testing add post it to trash bin action',
			})
		);
		const { container, getByText } = render(
			<BrowserRouter>
				<Trashspace />
			</BrowserRouter>
		);
		expect(container).toMatchSnapshot();
		expect(getByText('Testing add post it to trash bin action')).toBeTruthy();
	});
});
