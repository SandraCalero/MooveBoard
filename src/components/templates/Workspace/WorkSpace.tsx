import Modal from 'components/molecules/Modal/Modal';
import Header from 'components/organisms/Header/Header';
import PostIt from '../../atoms/PostIt/PostIt';

export default function WorkSpace() {
	return (
		<>
			<Header />
			<Modal />
			<PostIt />
		</>
	);
}
