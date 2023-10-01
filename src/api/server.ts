import { initializeApp } from "firebase/app";
import { FirebaseConfig } from "@/interfaces/FirebaseConfig";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { Conversation } from "@/interfaces/Conversation";

const firebaseConfig: FirebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: "next-project-habla-mucho.firebaseapp.com",
	projectId: "next-project-habla-mucho",
	storageBucket: "next-project-habla-mucho.appspot.com",
	messagingSenderId: "139222634248",
	appId: "1:139222634248:web:aefd376ecff416f61766bd",
	measurementId: "G-8SZHSQJ1CK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getChats = async () => {
	try {
		const chatsCol = collection(db, "dialogs");
		const chatsSnapshot = await getDocs(chatsCol);
		const chatsList = chatsSnapshot.docs.map((doc) => doc.data());

		return chatsList;
	} catch (error: unknown) {
		console.error("Erro ao obter os chats:", error);
		return [];
	}
};

export const setChat = async (conversation: Conversation) => {
	try {
		const language = "en";
		const category = "travel";
		const difficulty = "advanced";

		const dialogsCollectionRef = collection(db, language, category, difficulty);

		await addDoc(dialogsCollectionRef, conversation);

		console.log(`Diálogo adicionada à coleção com ${category}:`, conversation);
	} catch (error) {
		console.error("Erro ao enviar o diálogo para o Firebase:", error);
	}
};

