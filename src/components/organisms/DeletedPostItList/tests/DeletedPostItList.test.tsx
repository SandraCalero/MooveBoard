import { IPostIt } from 'globals/definitions/postItProps';
import { render } from 'utils/tests/test-utils';
import DeletedPostItList from '../DeletedPostItList';

describe('<DeletedPostItList />', () => {
	it('should match the snapshot', () => {
		const postItList: Array<IPostIt> = [
			{
				id: 1,
				content: 'Testing list of deleted post its, this is post it one',
			},
			{
				id: 2,
				content: 'Testing list of deleted post its, this is post it two',
			},
		];
		const showModal = jest.fn();
		const { container, getByText } = render(
			<DeletedPostItList postItList={postItList} showModal={showModal} />
		);
		expect(container).toMatchSnapshot();
		expect(
			getByText('Testing list of deleted post its, this is post it one')
		).toBeTruthy();
		expect(
			getByText('Testing list of deleted post its, this is post it two')
		).toBeTruthy();
	});
});
