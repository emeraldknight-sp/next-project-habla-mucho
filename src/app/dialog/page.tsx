"use client";

import Image from "next/image";

import React, { useContext, useEffect, useState } from "react";

import { DocumentData } from "@firebase/firestore-types";
import { getChats } from "@/api";

import { SidebarLeft, SidebarRight } from "@/components/Sidebars";
import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";

import { usersData } from "@/mock/usersData";
import { optionsData } from "@/mock/optionsData";

import { AppContext } from "@/context/AppContext";
import { UsersContext } from "@/context/UsersContext";
import { useSearchParams } from "next/navigation";

export default function Dialog() {
	const { language, peopleCount } = useContext(AppContext);
	const [data, setData] = useState<DocumentData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const searchParams = useSearchParams();
	const search = searchParams.get("d");

	const { firstName } = useContext(UsersContext);

	const users = usersData.filter((element) => element.firstName !== firstName);
	const userIndex = Math.floor(Math.random() * users.length);
	const user = users[userIndex];

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

	console.log("DATA LOG", data.length)

	const chats = data
		.filter((element) => element.category === search || "random" === search)
		.filter(
			(element) =>
				element.language === language && element.people === peopleCount,
		);
	const chatIndex = Math.floor(Math.random() * chats.length);
	const chat = chats[chatIndex];

	if (loading) {
		return <div className="text-black">Carregando...</div>;
	}

	const modifiedTitle =
		chat.title.charAt(0).toUpperCase() + chat.title.slice(1).replace("_", " ");

	return (
		<>
			<div className="flex flex-row my-14">
				<SidebarLeft />
				<Main>
					<div className="flex flex-col gap-4">
						<h3 className="text-center text-lg">{modifiedTitle}</h3>
						{chat.dialog.map((element: DocumentData, index: number) => (
							<div
								key={index}
								className={`flex flex-row items-start gap-1 ${
									element.user === 1 ? "justify-start" : "justify-end"
								}`}
							>
								<figure className={element.user === 1 ? "visible" : "hidden"}>
									<Image
										src={user.avatar}
										width={32}
										height={32}
										className="rounded-full"
										alt="avatar"
									/>
								</figure>

								<div
									className={`px-2 py-1 w-60 rounded-md shadow-sm  ${
										element.user === 1 ? "bg-green" : "bg-white"
									}`}
								>
									<p className="text-sm">{element.message}</p>
								</div>
							</div>
						))}
					</div>
				</Main>
				<SidebarRight />
			</div>
			<Navbar />
		</>
	);
}
