import PostIt from 'components/atoms/PostIt/PostIt';
import Modal from 'components/molecules/Modal/Modal';
import HeaderTrashBin from 'components/organisms/HeaderTrashBin/HeaderTrashBin';

export default function TrashSpace() {
	return (
		<section>
			<HeaderTrashBin />
			<Modal />
			<PostIt />
		</section>
	);
}
