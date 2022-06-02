import DeletedPostIt from 'components/molecules/DeletedPostIt/DeletedPostIt';
import { IPostIt } from 'globals/definitions/postItProps';
import './DeletedPostItList.css';

interface PostItListProps {
	postItList: Array<IPostIt>;
	shouldOpenModal: (s: IPostIt) => void;
}

function DeletedPostItList({ postItList, shouldOpenModal }: PostItListProps) {
	return (
		<ul className='container deletedPostIts'>
			{postItList.map((postIt) => (
				<li key={postIt.id}>
					<DeletedPostIt
						id={postIt.id}
						shouldOpenModal={shouldOpenModal}
						content={postIt.content}
					/>
				</li>
			))}
		</ul>
	);
}

export default DeletedPostItList;
