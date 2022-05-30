import Button from 'components/atoms/Button/Button';
import Modal from 'components/molecules/Modal/Modal';
import TrashBinLink from 'components/molecules/TrashBinLink/TrashBinLink';
import Header from 'components/organisms/Header/Header';
import newPostIt from 'assets/icons/newPostIt.png';
import PostIt from '../../atoms/PostIt/PostIt';

export default function WorkSpace() {
	return (
		<section>
			<Header>
				<Button
					variant='newPostItButton'
					icon={newPostIt}
					altText='Create new Post It'
				/>
				<TrashBinLink />
			</Header>
			<Modal
				title='Move post it to the trash'
				message='Are you sure you want to move this post it to the trash?'
			/>
			<PostIt />
		</section>
	);
}
