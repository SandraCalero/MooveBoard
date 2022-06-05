import Button from 'components/atoms/Button/Button';
import TrashBinLink from 'components/molecules/TrashBinLink/TrashBinLink';
import Header from 'components/organisms/Header/Header';
import newPostIt from 'assets/icons/newPostIt.png';
import PostItEditableList from 'components/organisms/PostItEditableList/PostItEditableList';
import Modal from 'components/molecules/Modal/Modal';
import useWorkspace from './useWorkspace';

export default function Workspace() {
	const {
		isModalOpen,
		postItList,
		modeText,
		movePostItToTrash,
		hideModal,
		showModal,
		handleCreatePostIt,
		handleDarkMode,
	} = useWorkspace();

	return (
		<section className='overflow-y-scroll h-full flex flex-col'>
			<Header>
				<Button
					variant='w-20 h-20 z-10'
					icon={newPostIt}
					altText='Create new Post It'
					onClick={handleCreatePostIt}
				/>
				<TrashBinLink />
			</Header>
			<h1
				className='text-center text-grey dark:text-mine-shaft-400
				transition-colors'
			>
				Workspace
			</h1>
			<PostItEditableList postItList={postItList} showModal={showModal} />
			<Modal
				title='Move post it to the trash'
				message='Are you sure you want to move this post it to the trash?'
				isModalOpen={isModalOpen}
				onConfirm={movePostItToTrash}
				onCancel={hideModal}
			/>
			<Button
				variant='fixed bottom-2 right-4 bg-blue text-white p-2 font-medium
				dark:bg-white dark:text-blue rounded-lg transition-colors'
				text={modeText}
				onClick={handleDarkMode}
			/>
		</section>
	);
}
