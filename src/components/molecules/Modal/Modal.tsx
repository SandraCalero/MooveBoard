import warning from 'assets/icons/warning.png';
import Button from 'components/atoms/Button/Button';
import './Modal.css';
import useModal from './useModal';

interface ModalProps {
	title: string;
	message: string;
	isModalOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export default function Modal({
	isModalOpen,
	message,
	title,
	onConfirm,
	onCancel,
}: ModalProps) {
	const { wrapperClass } = useModal({ isModalOpen });

	return (
		<div className={wrapperClass}>
			<div className='modal'>
				<h2 className='modalTitle'>{title}</h2>
				<div className='modalMessage'>
					<img src={warning} alt='Warning icon' />
					<p>{message}</p>
				</div>

				<div className='divModalButtons'>
					<Button variant='cancelButton' text='Cancel' onClick={onCancel} />
					<Button variant='confirmButton' text='Confirm' onClick={onConfirm} />
				</div>
			</div>
		</div>
	);
}
