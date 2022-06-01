import backToWorkspace from 'assets/icons/backToWorkspace.png';
import Button from 'components/atoms/Button/Button';
import Header from 'components/organisms/Header/Header';
import { Link } from 'react-router-dom';
import restorePostIt from 'assets/icons/restorePostIt.png';
import emptyTrashBin from 'assets/icons/emptyTrashBin.png';
import PostItList from 'components/organisms/PostItList/PostItList';
import { useDispatch, useSelector } from 'react-redux';
import { cleanTrashBin, restoreAllPostIts } from 'redux/slices/trashspace';
import { RootState } from 'redux/store';

export default function Trashspace() {
	const dispatch = useDispatch();
	const postItListDeleted = useSelector(
		(state: RootState) => state.trashspace.postItListDeleted
	);

	return (
		<section>
			<Header>
				<Button
					variant='emptyTrash'
					text='Empty trash bin'
					icon={emptyTrashBin}
					altText='Empty trash bin'
					onClick={() => dispatch(cleanTrashBin())}
				/>
				<Button
					variant='restorePostIts'
					text='Restore all post-its'
					icon={restorePostIt}
					altText='Restore all post-its'
					onClick={() => dispatch(restoreAllPostIts())}
				/>
				<Link to='/' className='link'>
					<img src={backToWorkspace} alt='Trash bin' />
					<span>Back to workspace </span>
				</Link>
			</Header>

			<PostItList
				postItListVariant='postItListDeleted'
				postItList={postItListDeleted}
			/>
		</section>
	);
}
