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
		<section className='overflow-hidden h-full'>
			<Header>
				<Button
					variant='w-20 h-28'
					text='Empty trash bin'
					icon={emptyTrashBin}
					altText='Empty trash bin'
					onClick={handleClearTrash}
				/>
				<Button
					variant='w-20 h-28'
					text='Restore all post-its'
					icon={restoreAllPostIts}
					altText='Restore all post-its'
					onClick={handleRestoreAll}
				/>
				<Link
					to='/'
					className='w-20 h-28 flex flex-col items-center no-underline p-0 m-2 text-center hover:opacity-90 active:translate-y-1'
				>
					<img className='w-4/5 h-4/5' src={backToWorkspace} alt='Trash bin' />
					<span>Back to workspace </span>
				</Link>
			</Header>
			<h1 className='text-center text-grey'>Trash Bin</h1>

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
