import PostIt from 'components/molecules/PostIt/PostIt';
import './PostItList.css';

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
	return (
		<ul className={`container ${postItListVariant}`}>
			{postItList.map((postIt) => (
				<li key={postIt.id}>
					<PostIt
						id={postIt.id}
						content={postIt.content}
						variant={postIt.variant}
						draggable={postIt.draggable}
						disabled={postIt.disabled}
					/>
				</li>
			))}
		</ul>
	);
}

PostItList.defaultProps = {
	postItListVariant: '',
};
export default PostItList;
