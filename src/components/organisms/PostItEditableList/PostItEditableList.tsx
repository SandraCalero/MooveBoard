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
		<ul
			className='grid grid-cols-auto p-4 m-0 list-none gap-4
			justify-center'
		>
			{postItList.map((postIt) => (
				<li className='justify-self-center' key={postIt.id}>
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
