export interface MenuOption {
	title: string;
	url: string;
	icon: string;
	color1: string;
	color2: string;
}

export interface Difficulty {
	id: number;
	difficulty: string;
	language: {
		PT: string;
		EN: string;
		ES: string;
		IT: string;
	};
}

export interface Language {
	icon: string;
	language: string;
	id: string;
}

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	avatar: string;
	occupation: string;
}
