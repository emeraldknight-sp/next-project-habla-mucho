"use client";

import React, { useContext, useEffect, useState } from "react";
import { Main } from "@/components/Main";

import { DocumentData } from "@firebase/firestore-types";
import { optionsData } from "@/mock/optionsData";
import { getChats } from "@/api";

import { AppContext } from "@/context/AppContext";

export default function Dialog() {
	const { language, peopleCount } = useContext(AppContext);
	const [data, setData] = useState<DocumentData[]>([]);
	const [loading, setLoading] = useState(true);

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

	if (loading) {
		return <div className="text-black">Carregando...</div>;
	}

	const chats = data.filter(
		(element) =>
			element.language === language && element.people === peopleCount,
	);

	const index = Math.floor(Math.random() * chats.length);

	return (
		<>
			<div className="flex flex-row my-14">
				<Main>
					{chats[index].dialog.map((element: DocumentData, index: number) => (
						<div
							key={index}
							className={`flex flex-row ${
								element.user === 1 ? "justify-start" : "justify-end"
							}`}
						>
							<p
								className={`w-fit px-2 py-1 mb-1 rounded-md shadow-sm text-sm ${
									element.user === 1 ? "bg-green" : "bg-white"
								}`}
							>
								{element.message}
							</p>
						</div>
					))}
				</Main>
			</div>
		</>
	);
}
