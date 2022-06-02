export interface IPostIt {
	id: number;
	content?: string;
}

export interface IPostItEditable extends IPostIt {
	disabled?: boolean;
}

export interface IPostItWithEvent extends IPostIt {
	shouldOpenModal: (postIt: IPostIt) => void;
}

export interface IPostItEditableWithEvent extends IPostItEditable {
	shouldOpenModal: (postIt: PostIt) => void;
}
