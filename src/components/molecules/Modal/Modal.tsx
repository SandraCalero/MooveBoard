import warning from 'assets/icons/warning.png';
import Button from 'components/atoms/Button/Button';
import './Modal.css';

interface ModalProps {
	title: string;
	message: string;
}

export default function Modal({ title, message }: ModalProps) {
	/* const wrapperClass = classNames('glass', {
		show: isConfirmationOpen,
	}); */
	return (
		<div className='glass'>
			<div className='modal'>
				<h2 className='modalTitle'>{title}</h2>
				<div className='modalMessage'>
					<img src={warning} alt='Warning icon' />
					<p>{message}</p>
				</div>

				<div className='divModalButtons'>
					<Button variant='cancelButton' text='Cancel' />
					<Button variant='confirmButton' text='Confirm' />
				</div>
			</div>
		</div>
	);
}
