import { IPostItEditable } from 'globals/definitions/postItProps';

/**
 * Sort the post-it list in ascending order by id.
 * @param postItList - Array<IPostItEditable>
 */
const sortAsc = (postItList: Array<IPostItEditable>) => {
	postItList.sort((postItA, postItB) => {
		if (postItA.id > postItB.id) return 1;
		if (postItA.id < postItB.id) return -1;
		return 0;
	});
};

/**
 * Sort the post-it list in descending order by id.
 * @param postItList - Array<IPostItEditable>
 */
const sortDes = (postItList: Array<IPostItEditable>) => {
	postItList.sort((postItA, postItB) => {
		if (postItA.id < postItB.id) return 1;
		if (postItA.id > postItB.id) return -1;
		return 0;
	});
};

export { sortAsc, sortDes };
