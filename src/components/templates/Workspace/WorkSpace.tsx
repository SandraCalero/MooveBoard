import Modal from 'components/molecules/Modal/Modal';
import HeaderWorkSpace from 'components/organisms/HeaderWorkSpace/HeaderWorkSpace';
import PostIt from '../../atoms/PostIt/PostIt';

export default function WorkSpace() {
	return (
		<section>
			<HeaderWorkSpace />
			<Modal />
			<PostIt />
		</section>
	);
}
