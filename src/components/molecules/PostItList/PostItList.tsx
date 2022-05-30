import PostIt from 'components/atoms/PostIt/PostIt';
import './PostItList.css';

interface PostItListProps {
	postItVariant: string;
	draggable: boolean;
	disabled: boolean;
	postItListVariant?: string;
}

function PostItList({
	postItListVariant,
	postItVariant,
	draggable,
	disabled,
}: PostItListProps) {
	const postItDeletedList = [
		{
			id: '1',
			content: 'jfsfhsfff',
		},
		{ id: '2', content: 'jfsfhsjf' },
		{ id: '3', content: 'jfsfhsjf' },
		{ id: '4', content: 'jfsfhsjf' },
		{ id: '5', content: 'jfsfhsjf' },
		{ id: '6', content: 'jfsfhsjf' },
		{ id: '7', content: 'jfsfhsjf' },
		{ id: '8', content: 'jfsfhsjf' },
		{ id: '9', content: 'jfsfhsjf' },
		{ id: '10', content: 'jfsfhsjf' },
		{ id: '11', content: 'jfsfhsjf' },
		{ id: '12', content: 'jfsfhsjf' },
		{ id: '13', content: 'jfsfhsjf' },
		{ id: '14', content: 'jfsfhsjf' },
		{ id: '15', content: 'jfsfhsjf' },
		{ id: '16', content: 'jfsfhsjf' },
		{ id: '17', content: 'jfsfhsjf' },
		{ id: '18', content: 'jfsfhsjf' },
		{ id: '19', content: 'jfsfhsjf' },
	];
	return (
		<ul className={`container ${postItListVariant}`}>
			{postItDeletedList.map((postIt) => (
				<li key={postIt.id}>
					<PostIt
						id={postIt.id}
						content={postIt.content}
						variant={postItVariant}
						draggable={draggable}
						disabled={disabled}
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
