import backToWorkspace from 'assets/icons/backToWorkspace.png';
import Button from 'components/atoms/Button/Button';
import Header from 'components/organisms/Header/Header';
import { Link } from 'react-router-dom';
import Modal from 'components/molecules/Modal/Modal';
import PostIt from 'components/atoms/PostIt/PostIt';
import restorePostIt from 'assets/icons/restorePostIt.png';
import emptyTrashBin from 'assets/icons/emptyTrashBin.png';
import './TrashSpace.css';

export default function TrashSpace() {
	return (
		<section>
			<Header>
				<Button
					variant='emptyTrash'
					text='Empty trash bin'
					icon={emptyTrashBin}
					altText='Empty trash bin'
				/>
				<Button
					variant='restorePostIts'
					text='Restore all post-its'
					icon={restorePostIt}
					altText='Restore all post-its'
				/>
				<Link to='/' className='link'>
					<img src={backToWorkspace} alt='Trash bin' />
					<span>Back to workspace </span>
				</Link>
			</Header>
			<main className='container'>
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
			</main>
			<Modal
				title='Delete Post It Note'
				message='Are you sure you want to delete this post it permanently?'
			/>
		</section>
	);
}
