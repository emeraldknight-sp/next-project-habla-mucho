"use client";

import React, { useEffect } from "react";

import { Main } from "@/components/Main";

import { chatData } from "@/mock/chatData";
import { useApp } from "@/context/AppContext";

export default function Dialog() {
	const { language, peopleCount, setLanguage, setPeopleCount } = useApp();

	useEffect(() => {
		const storedLanguage = localStorage.getItem("selectedLanguage");
		const storedPeopleCount = localStorage.getItem("selectedPeopleCount");

		console.log(storedLanguage, storedPeopleCount);

		if (storedLanguage) {
			setLanguage(storedLanguage);
		}

		if (storedPeopleCount) {
			setPeopleCount(storedPeopleCount);
		}
	}, []);

	const filteredChats = chatData.filter(
		(element) =>
			language === element.language && Number(peopleCount) === element.people,
	);

	const index = Math.floor(Math.random() * filteredChats.length);

	return (
		<div className="flex flex-row my-14">
			<Main>
				{chatData[index].dialog.map((element, index) => {
					return (
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
					);
				})}
			</Main>
		</div>
	);
}
