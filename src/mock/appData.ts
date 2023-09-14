import { DocumentData } from "firebase/firestore";
import { Difficulty, Language, User } from "@/interfaces/Options";
// import { Conversation } from "@/interfaces/Conversation";

export const mockConversations: DocumentData[] = [
	{
		id: 1,
		title: "greetings",
		category: "travel",
		difficulty: "easy",
		language: "EN",
		people: 2,
		size: "short",
		dialog: [
			{
				user: 1,
				message: "Hello",
			},
			{
				user: 2,
				message: "Hi, good morning!!!",
			},
			{
				user: 1,
				message: "How are you doing?",
			},
			{
				user: 2,
				message: "Nothing special and you?",
			},
		],
	},
	{
		id: 2,
		title: "greetings",
		category: "travel",
		difficulty: "easy",
		language: "PT",
		people: 2,
		size: "short",
		dialog: [
			{
				user: 1,
				message: "Olá",
			},
			{
				user: 2,
				message: "Oi, bom dia!!!",
			},
			{
				user: 1,
				message: "Como vai você?",
			},
			{
				user: 2,
				message: "Nada de especial e você?",
			},
		],
	},
	{
		id: 3,
		title: "greetings",
		category: "travel",
		difficulty: "easy",
		language: "ES",
		people: 2,
		size: "short",
		dialog: [
			{
				user: 1,
				message: "Hola",
			},
			{
				user: 2,
				message: "¡Hola, buenos días!",
			},
			{
				user: 1,
				message: "¿Cómo estás?",
			},
			{
				user: 2,
				message: "Nada especial y tú?",
			},
		],
	},
	{
		id: 4,
		title: "greetings",
		category: "travel",
		difficulty: "easy",
		language: "IT",
		people: 2,
		size: "short",
		dialog: [
			{
				user: 1,
				message: "Ciao",
			},
			{
				user: 2,
				message: "Ciao, buongiorno!!!",
			},
			{
				user: 1,
				message: "Come stai?",
			},
			{
				user: 2,
				message: "Niente di speciale e tu?",
			},
		],
	},
];

export const mockPeopleCount: number[] = [2, 3, 4, 5];

export const mockLanguageOptions: Language[] = [
	{
		icon: "/brazil.png",
		language: "Português",
		id: "PT",
	},
	{
		icon: "/united-states-america.png",
		language: "English",
		id: "EN",
	},
	{
		icon: "/spain.png",
		language: "Español",
		id: "ES",
	},
	{
		icon: "/italia.png",
		language: "Italiano",
		id: "IT",
	},
];

export const mockDifficultyLevels: Difficulty[] = [
	{
		id: 1,
		difficulty: "easy",
		language: {
			PT: "Fácil",
			EN: "Easy",
			ES: "Fácil",
			IT: "Facile",
		},
	},
	{
		id: 2,
		difficulty: "medium",
		language: {
			PT: "Médio",
			EN: "Medium",
			ES: "Medio",
			IT: "Medio",
		},
	},
	{
		id: 3,
		difficulty: "hard",
		language: {
			PT: "Avançado",
			EN: "Advanced",
			ES: "Avançado",
			IT: "Avanzato",
		},
	},
];

export const mockUsers: User[] = [
	{
		id: 1,
		firstName: "Walter",
		lastName: "White",
		avatar: "/heisenberg.webp",
		occupation: "Professor",
	},
	{
		id: 2,
		firstName: "Jesse",
		lastName: "Pinkman",
		avatar: "/jesse.webp",
		occupation: "Estudante",
	},
	{
		id: 3,
		firstName: "Jane",
		lastName: "Margolis",
		avatar: "/jane.webp",
		occupation: "",
	},
	{
		id: 4,
		firstName: "Saul",
		lastName: "Goodman",
		avatar: "/jimmy.webp",
		occupation: "Advogado",
	},
	{
		id: 5,
		firstName: "Mike",
		lastName: "Ehrmantraut",
		avatar: "/ehrmantraut.webp",
		occupation: "Investigador",
	},
	{
		id: 6,
		firstName: "Gustavo",
		lastName: "Fring",
		avatar: "/gus.webp",
		occupation: "Empresário",
	},
];
