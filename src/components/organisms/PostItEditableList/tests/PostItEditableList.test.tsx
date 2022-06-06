import { IPostItEditable } from 'globals/definitions/postItProps';
import { render } from 'utils/tests/test-utils';
import PostItEditableList from '../PostItEditableList';

describe('<PostItEditableList />', () => {
	it('should match the snapshot', () => {
		const postItList: Array<IPostItEditable> = [
			{
				id: 1,
				content: 'Testing list of post its, this is post it one',
				disabled: true,
			},
			{
				id: 2,
				content: 'Testing list of post its, this is post it two',
				disabled: true,
			},
		];
		const showModal = jest.fn();
		const { container, getByText } = render(
			<PostItEditableList postItList={postItList} showModal={showModal} />
		);
		expect(container).toMatchSnapshot();
		expect(
			getByText('Testing list of post its, this is post it one')
		).toBeTruthy();
		expect(
			getByText('Testing list of post its, this is post it two')
		).toBeTruthy();
	});
});
