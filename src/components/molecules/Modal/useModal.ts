interface ModalProps {
	isModalOpen: boolean;
}

const useModal = ({ isModalOpen }: ModalProps) => {
	const wrapperClass: string = isModalOpen ? 'flex' : 'hidden';
	return { wrapperClass };
};

export default useModal;
