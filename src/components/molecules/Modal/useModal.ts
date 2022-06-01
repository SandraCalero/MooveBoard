import classNames from 'classnames';

interface ModalProps {
	isModalOpen: boolean;
}

export const useModal = ({ isModalOpen }: ModalProps) => {
	const wrapperClass: string = classNames('glass', {
		show: isModalOpen,
	});
	return { wrapperClass };
};

export default useModal;
