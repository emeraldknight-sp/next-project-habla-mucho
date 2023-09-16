"use client";

import Image from "next/image";
import React, { useContext } from "react";

import { DocumentData } from "@firebase/firestore-types";

import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { SidebarLeft, SidebarRight } from "@/components/Sidebars";

import { ChatContext } from "@/context/ChatContext";
import { UsersContext } from "@/context/UsersContext";

import { mockUsers } from "@/mock/appData";

export default function Dialog() {
	const { chat, loading } = useContext(ChatContext);
	const { firstName } = useContext(UsersContext);

	const users = mockUsers.filter((element) => element.firstName !== firstName);
	const userIndex = Math.floor(Math.random() * users.length);
	const user = users[userIndex];

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
									className={`px-2 py-1 w-60 md:w-96 rounded-md shadow-sm  ${
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
