/* It's defining the type of the props that are passed to the component. */
interface ModalProps {
	isModalOpen: boolean;
}

/**
 * It returns an object with a flex property that is set to flex if the isModalOpen prop is true, and
 * hidden if it's false
 * @param {ModalProps}  - ModalProps - the props that are passed to the component
 * @returns An object with a flex property.
 */
const useModal = ({ isModalOpen }: ModalProps) => {
	const flex: string = isModalOpen ? 'flex' : 'hidden';
	return { flex };
};

export default useModal;
