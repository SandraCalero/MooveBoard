import Modal from 'components/molecules/Modal/Modal';
import PostIt from 'components/molecules/PostIt/PostIt';
import './PostItList.css';
import { usePostItList } from './usePostItList';

interface PostItProps {
	id: number;
	content?: string;
	variant: string;
	draggable?: boolean;
	disabled?: boolean;
}

interface PostItListProps {
	postItListVariant?: string;
	postItList: Array<PostItProps>;
}

function PostItList({ postItListVariant, postItList }: PostItListProps) {
	const { isModalOpen, closeModal, openModal, sendPostItToTrash } =
		usePostItList();

	return (
		<>
			<ul className={`container ${postItListVariant}`}>
				{postItList.map((postIt) => (
					<li key={postIt.id}>
						<PostIt
							id={postIt.id}
							openModal={openModal}
							content={postIt.content}
							variant={postIt.variant}
							draggable={postIt.draggable}
							disabled={postIt.disabled}
						/>
					</li>
				))}
			</ul>
			<Modal
				title='Move post it to the trash'
				message='Are you sure you want to move this post it to the trash?'
				isModalOpen={isModalOpen}
				onConfirm={sendPostItToTrash}
				onCancel={closeModal}
			/>
		</>
	);
}

PostItList.defaultProps = {
	postItListVariant: '',
};
export default PostItList;
