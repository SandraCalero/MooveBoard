import backToWorkspace from 'assets/icons/backToWorkspace.png';
import Button from 'components/atoms/Button/Button';
import Header from 'components/organisms/Header/Header';
import { Link } from 'react-router-dom';
import restoreAllPostIts from 'assets/icons/restoreAllPostIts.png';
import emptyTrashBin from 'assets/icons/emptyTrashBin.png';
import Modal from 'components/molecules/Modal/Modal';
import DeletedPostItList from 'components/organisms/DeletedPostItList/DeletedPostItList';
import useTrashspace from './useTrashspace';

export default function Trashspace() {
	const {
		showModal,
		handleClearTrash,
		handleRestoreAll,
		hideModal,
		handleDeletePostIt,
		isModalOpen,
		deletedPostIts,
	} = useTrashspace();
	return (
		<section>
			<Header>
				<Button
					variant='emptyTrash'
					text='Empty trash bin'
					icon={emptyTrashBin}
					altText='Empty trash bin'
					onClick={handleClearTrash}
				/>
				<Button
					variant='restorePostIts'
					text='Restore all post-its'
					icon={restoreAllPostIts}
					altText='Restore all post-its'
					onClick={handleRestoreAll}
				/>
				<Link to='/' className='link'>
					<img src={backToWorkspace} alt='Trash bin' />
					<span>Back to workspace </span>
				</Link>
			</Header>
			<h1>Trash Bin</h1>

			<DeletedPostItList postItList={deletedPostIts} showModal={showModal} />
			<Modal
				title='Delete Post It Note'
				message='Are you sure you want to delete this post it permanently?'
				isModalOpen={isModalOpen}
				onConfirm={handleDeletePostIt}
				onCancel={hideModal}
			/>
		</section>
	);
}
