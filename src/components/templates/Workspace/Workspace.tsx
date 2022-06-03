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
		movePostItToTrash,
		hideModal,
		showModal,
		handleCreatePostIt,
		postItList,
	} = useWorkspace();

	return (
		<section>
			<Header>
				<Button
					variant='newPostItButton'
					icon={newPostIt}
					altText='Create new Post It'
					onClick={handleCreatePostIt}
				/>
				<TrashBinLink />
			</Header>
			<h1>Workspace</h1>
			<PostItEditableList postItList={postItList} showModal={showModal} />
			<Modal
				title='Move post it to the trash'
				message='Are you sure you want to move this post it to the trash?'
				isModalOpen={isModalOpen}
				onConfirm={movePostItToTrash}
				onCancel={hideModal}
			/>
		</section>
	);
}
