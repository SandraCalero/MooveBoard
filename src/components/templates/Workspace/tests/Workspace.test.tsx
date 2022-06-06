import { BrowserRouter } from 'react-router-dom';
import { createPostIt, editPostIt } from 'redux/reducers/workspace';
import store from 'redux/store';
import { render } from 'utils/tests/test-utils';
import Workspace from '../Workspace';

describe('<Workspace />', () => {
	it('should match the snapshot', () => {
		store.dispatch(createPostIt());
		store.dispatch(
			editPostIt({ id: 1, content: 'Testing edit post it action' })
		);
		const { container, getByText } = render(
			<BrowserRouter>
				<Workspace />
			</BrowserRouter>
		);
		expect(container).toMatchSnapshot();
		expect(getByText('Testing edit post it action')).toBeTruthy();
	});
});
