import PostIt from 'components/molecules/PostIt/PostIt';
import { IPostItEditable, IPostIt } from 'globals/definitions/postItProps';
import './PostItEditableList.css';

interface PostItListProps {
	postItList: Array<IPostItEditable>;
	shouldOpenModal: (postIt: IPostIt) => void;
}

function PostItEditableList({ postItList, shouldOpenModal }: PostItListProps) {
	return (
		<ul className='container'>
			{postItList.map((postIt) => (
				<li key={postIt.id}>
					<PostIt
						id={postIt.id}
						shouldOpenModal={shouldOpenModal}
						content={postIt.content}
						disabled={postIt.disabled}
					/>
				</li>
			))}
		</ul>
	);
}

export default PostItEditableList;
