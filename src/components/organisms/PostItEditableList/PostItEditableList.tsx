import PostIt from 'components/molecules/PostIt/PostIt';
import { IPostItEditable, IPostIt } from 'globals/definitions/postItProps';

interface PostItListProps {
	postItList: Array<IPostItEditable>;
	shouldOpenModal: (postIt: IPostIt) => void;
}

export default function PostItEditableList({
	postItList,
	shouldOpenModal,
}: PostItListProps) {
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
