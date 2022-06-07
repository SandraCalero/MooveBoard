import Button from 'components/atoms/Button/Button';
import TrashBinLink from 'components/molecules/TrashBinLink/TrashBinLink';
import Header from 'components/organisms/Header/Header';
import newPostIt from 'assets/icons/newPostIt.png';
import sendAllToTrash from 'assets/icons/sendAllToTrash.png';
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
		handleMoveAllToTrash,
		handleDarkMode,
	} = useWorkspace();

	return (
		<main className='overflow-y-scroll h-full flex flex-col'>
			<Header>
				<Button
					variant='w-20 h-20'
					icon={newPostIt}
					altText='Create new Post It'
					onClick={handleCreatePostIt}
				/>
				<Button
					variant='w-20 h-20 '
					text='Delete All'
					icon={sendAllToTrash}
					altText='Send All to Trash Bin'
					onClick={handleMoveAllToTrash}
				/>
				<TrashBinLink />
			</Header>
			<section>
				<h1
					className='m-2 text-center text-grey dark:text-mine-shaft-400
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
			</section>

			<Button
				variant='w-20 fixed bottom-2 right-4 bg-blue text-white p-2
				hover:opacity-100 font-medium after:absolute after:right-1
				after:bg-white !items-start	after:rounded-full after:p-1
				after:w-8 after:h-8 after:text-sm active:translate-y-0
				dark:!items-end dark:after:left-1 dark:after:bg-blue
				dark:bg-white dark:text-blue rounded-3xl transition-colors
				transition-transform duration-300 md:w-24'
				text={modeText}
				onClick={handleDarkMode}
			/>
		</main>
	);
}
