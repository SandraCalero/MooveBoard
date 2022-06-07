import { IPostItEditable } from 'globals/definitions/postItProps';

const sortAsc = (postItList: Array<IPostItEditable>) => {
	postItList.sort((postItA, postItB) => {
		if (postItA.id > postItB.id) return 1;
		if (postItA.id < postItB.id) return -1;
		return 0;
	});
};

const sortDes = (postItList: Array<IPostItEditable>) => {
	postItList.sort((postItA, postItB) => {
		if (postItA.id < postItB.id) return 1;
		if (postItA.id > postItB.id) return -1;
		return 0;
	});
};

export { sortAsc, sortDes };
