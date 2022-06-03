import PostIt from 'components/molecules/PostIt/PostIt';
import { IPostItEditable, IPostIt } from 'globals/definitions/postItProps';

interface PostItListProps {
	postItList: Array<IPostItEditable>;
	showModal: (postIt: IPostIt) => void;
}

export default function PostItEditableList({
	postItList,
	showModal,
}: PostItListProps) {
	return (
		<ul className='container'>
			{postItList.map((postIt) => (
				<li key={postIt.id}>
					<PostIt
						id={postIt.id}
						showModal={showModal}
						content={postIt.content}
						disabled={postIt.disabled}
					/>
				</li>
			))}
		</ul>
	);
}
