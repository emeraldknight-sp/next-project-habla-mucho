import toast from "react-hot-toast";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyBmXwsD17wuHfTBvqJpB38_7gpiiy-36gk",
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
    toast.error(`Erro ao obter os chats: ${error}`);
		console.error("Erro ao obter os chats:", error);
		return [];
	}
};

