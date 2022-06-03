import DeletedPostIt from 'components/molecules/DeletedPostIt/DeletedPostIt';
import { IPostIt } from 'globals/definitions/postItProps';
import './DeletedPostItList.css';

interface PostItListProps {
	postItList: Array<IPostIt>;
	showModal: (s: IPostIt) => void;
}

export default function DeletedPostItList({
	postItList,
	showModal,
}: PostItListProps) {
	return (
		<ul className='container deletedPostIts'>
			{postItList.map((postIt) => (
				<li key={postIt.id}>
					<DeletedPostIt
						id={postIt.id}
						showModal={showModal}
						content={postIt.content}
					/>
				</li>
			))}
		</ul>
	);
}
