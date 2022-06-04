import DeletedPostIt from 'components/molecules/DeletedPostIt/DeletedPostIt';
import { IPostIt } from 'globals/definitions/postItProps';

interface PostItListProps {
	postItList: Array<IPostIt>;
	showModal: (s: IPostIt) => void;
}

export default function DeletedPostItList({
	postItList,
	showModal,
}: PostItListProps) {
	return (
		<ul className='grid grid-cols-auto p-4 m-0 list-none gap-4 justify-center'>
			{postItList.map((postIt) => (
				<li className='justify-self-center' key={postIt.id}>
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
