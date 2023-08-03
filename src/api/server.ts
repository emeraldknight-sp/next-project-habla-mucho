import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { FirebaseConfig } from "@/interfaces/FirebaseConfig";

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
