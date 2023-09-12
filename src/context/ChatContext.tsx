"use client";

import { ComponentProps } from "@/interfaces/ComponentProps";
import { DocumentData } from "@firebase/firestore-types";
import { createContext, useContext, useEffect, useState } from "react";

import { getChats } from "@/api";
import { optionsData } from "@/mock/optionsData";
import { useSearchParams } from "next/navigation";
import { AppContext } from "./AppContext";

export const ChatContext = createContext({
	chat: optionsData[0],
	loading: true,
});

export const ChatProvider = ({ children }: ComponentProps) => {
	const { language, peopleCount } = useContext(AppContext);

	const [data, setData] = useState<DocumentData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const searchParams = useSearchParams();
	const search = searchParams.get("d");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const chats = await getChats();
				localStorage.setItem("data", JSON.stringify(chats));
				setData(chats);
			} catch (error) {
				console.error("Erro ao obter os chats:", error);
				setData(optionsData);
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
				element.language === language && element.people === peopleCount,
		);
	const chatIndex = Math.floor(Math.random() * chats.length);
	const chat = chats[chatIndex];

	return (
		<ChatContext.Provider value={{ chat, loading }}>
			{children}
		</ChatContext.Provider>
	);
};
