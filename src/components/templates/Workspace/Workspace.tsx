import Button from 'components/atoms/Button/Button';
import TrashBinLink from 'components/molecules/TrashBinLink/TrashBinLink';
import Header from 'components/organisms/Header/Header';
import newPostIt from 'assets/icons/newPostIt.png';
import PostItList from 'components/organisms/PostItList/PostItList';
import { useDispatch, useSelector } from 'react-redux';
import { createPostIt } from 'redux/slices/workspace';
import { RootState } from 'redux/store';

export default function Workspace() {
	const dispatch = useDispatch();
	const postItList = useSelector(
		(state: RootState) => state.workspace.postItList
	);
	return (
		<section>
			<Header>
				<Button
					variant='newPostItButton'
					icon={newPostIt}
					altText='Create new Post It'
					onClick={() => {
						dispatch(createPostIt());
					}}
				/>
				<TrashBinLink />
			</Header>
			<PostItList postItList={postItList} />
		</section>
	);
}
