export interface Conversation {
	id: number;
	title: string;
	people: 2 | 3 | 4 | 5;
	category:
		| "random"
		| "travel"
		| "survival"
		| "business"
		| "consumer"
		| "culture"
		| "fun"
		| "educational";
	language: "EN" | "PT" | "ES" | "IT";
	difficulty: "easy" | "medium" | "advanced";
	size: "short" | "medium" | "long";
	dialog: { user: number; message: string }[];
}
