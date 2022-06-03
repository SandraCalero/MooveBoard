export interface IPostIt {
	id: number;
	content?: string;
}

export interface IPostItEditable extends IPostIt {
	disabled?: boolean;
}

export interface IPostItWithEvent extends IPostIt {
	showModal: (postIt: IPostIt) => void;
}

export interface IPostItEditableWithEvent extends IPostItEditable {
	showModal: (postIt: PostIt) => void;
}
