import warning from 'assets/icons/warning.svg';
import Button from 'components/atoms/Button/Button';
import './Modal.css';

export default function Modal() {
	/* const wrapperClass = classNames('glass', {
		show: isConfirmationOpen,
	}); */
	return (
		<div className='glass'>
			<div className='modal'>
				<h2 className='modalTitle'>Delete Post It Note</h2>
				<div className='modalInfo'>
					<img src={warning} alt='Warning icon' />
					<p>Are you sure you want to send this note to the trash?</p>
				</div>

				<div className='divModalButtons'>
					<Button variant='cancelButton' text='Cancel' />
					<Button variant='confirmButton' text='Confirm' />
				</div>
			</div>
		</div>
	);
}
