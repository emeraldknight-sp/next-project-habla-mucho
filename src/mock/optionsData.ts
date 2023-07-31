import { DocumentData } from "@firebase/firestore-types";

export const optionsData: DocumentData[] = [
	{
		id: 1,
		title: "greetings",
		category: "travel",
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
