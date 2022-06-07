import { IPostItEditableWithEvent } from 'globals/definitions/postItProps';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPostIt } from 'redux/reducers/workspace';

/**
 * It takes in an object with an id, content, disabled, and showModal property, and returns an object
 * with a newContent, isDisabled, handleClose, handleChange, handleBlur, and handleClick property
 * @param {IPostItEditableWithEvent}  - IPostItEditableWithEvent - This is an interface that is used to
 * type the props that are passed to the post it component
 * @returns an object with the following properties:
 * 	- newContent
 * 	- isDisabled
 * 	- handleClose
 * 	- handleChange
 * 	- handleBlur
 * 	- handleClick
 */
const usePostIt = ({
	id,
	content,
	disabled,
	showModal,
}: IPostItEditableWithEvent) => {
	/* A hook that is provided by the react-redux library. It is used to dispatch actions to the Redux
	store. */
	const dispatch = useDispatch();

	/* Setting the state of the component. */
	const [newContent, setNewContent] = useState(content);
	const [isDisabled, setIsDisabled] = useState(disabled);

	/**
	 * The handleChange function takes an event of type ChangeEvent, which is a React event that has a
	 * target of type HTMLTextAreaElement, and sets the newContent state to the value of the target.
	 * @param event - ChangeEvent<HTMLTextAreaElement>
	 */
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNewContent(event.target.value);
	};

	/**
	 * When the button is clicked, set the state of the button to not disabled.
	 */
	const handleClick = () => {
		setIsDisabled(false);
	};

	/**
	 * When the user clicks away from the textarea, the function will set the isDisabled state to true,
	 * and then dispatch an action to edit the post-it
	 */
	const handleBlur = () => {
		setIsDisabled(true);
		dispatch(
			editPostIt({
				id,
				content: newContent,
			})
		);
	};

	/**
	 * It takes the id and content of the post it that was just closed, and then passes it to the showModal
	 * function
	 */
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
