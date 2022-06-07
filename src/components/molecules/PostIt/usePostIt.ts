import { IPostItEditableWithEvent } from 'globals/definitions/postItProps';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPostIt } from 'redux/reducers/workspace';

const usePostIt = ({
	id,
	content,
	disabled,
	showModal,
}: IPostItEditableWithEvent) => {
	const dispatch = useDispatch();

	/* States */
	const [newContent, setNewContent] = useState(content);
	const [isDisabled, setIsDisabled] = useState(disabled);

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNewContent(event.target.value);
	};

	const handleClick = () => {
		setIsDisabled(false);
	};

	const handleBlur = () => {
		setIsDisabled(true);
		dispatch(
			editPostIt({
				id,
				content: newContent,
			})
		);
	};

	const handleClose = () => showModal({ id, content });

	return {
		newContent,
		isDisabled,
		handleClose,
		handleChange,
		handleBlur,
		handleClick,
	};
};

export default usePostIt;
