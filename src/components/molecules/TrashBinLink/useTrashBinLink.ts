import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import trashBinEmpty from 'assets/icons/trashBinEmpty.png';
import trashBinFull from 'assets/icons/trashBinFull.png';

/**
 * It returns an object with a trash icon and a boolean that indicates whether the trash bin is empty
 * or not
 * @returns An object with two properties: trashIcon and isEmpty.
 */
const useTrashBinLink = () => {
	const deletedPostIts = useSelector(
		(state: RootState) => state.trashspace.deletedPostIts
	);
	const isEmpty = !deletedPostIts.length;
	const trashIcon = isEmpty ? trashBinEmpty : trashBinFull;

	return {
		trashIcon,
		isEmpty,
	};
};

export default useTrashBinLink;
