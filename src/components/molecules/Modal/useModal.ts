interface ModalProps {
	isModalOpen: boolean;
}

const useModal = ({ isModalOpen }: ModalProps) => {
	const flex: string = isModalOpen ? 'flex' : 'hidden';
	return { flex };
};

export default useModal;
