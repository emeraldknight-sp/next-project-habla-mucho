"use client";

import { ComponentProps } from "@/interfaces/ComponentProps";
import { DocumentData } from "@firebase/firestore-types";
import { createContext, useContext, useEffect, useState } from "react";

import { getChats } from "@/api";
import { useSearchParams } from "next/navigation";
import { AppContext } from "./AppContext";
import { mockConversations } from "@/mock/appData";

export const ChatContext = createContext({
	chat: mockConversations[0],
	loading: true
});

export const ChatProvider = ({ children }: ComponentProps) => {
	const { selectedLanguage, selectedPeopleCount } = useContext(AppContext);

	const [data, setData] = useState<DocumentData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
		const searchParams = useSearchParams();
		const search = searchParams.get("d");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const chats = await getChats();
				localStorage.setItem("data", JSON.stringify(chats));
				setData(chats || localStorage.setItem("data", JSON.stringify(chats)));
			} catch (error) {
				console.error("Erro ao obter os chats:", error);
				setData(mockConversations);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const chats = data
		.filter((element) => element.category === search || "random" === search)
		.filter(
			(element) =>
				element.language === selectedLanguage && element.people === selectedPeopleCount,
		);
	const chatIndex = Math.floor(Math.random() * chats.length);
	const chat = chats[chatIndex];

	return (
		<ChatContext.Provider value={{ chat, loading }}>
			{children}
		</ChatContext.Provider>
	);
};
