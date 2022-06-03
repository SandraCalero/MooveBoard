import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import trashBinEmpty from 'assets/icons/trashBinEmpty.png';
import trashBinFull from 'assets/icons/trashBinFull.png';

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
