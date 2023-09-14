"use client";

import React, { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";

import Image from "next/image";

import { AppContext } from "@/context/AppContext";
import { NavbarContext } from "@/context/NavbarContext";
import {
	mockDifficultyLevels,
	mockPeopleCount,
	mockLanguageOptions,
} from "@/mock/appData";

export const SidebarLeft = () => {
	const {
		selectedLanguage,
		selectedPeopleCount,
		selectedDifficulty,
		handleLanguageChange,
		handlePeopleCountChange,
		handleDifficultyChange,
	} = useContext(AppContext);
	
	const { showSidebarLeft } = useContext(NavbarContext);

	const notify = () =>
		toast.error("Em desenvolvimento.", { id: "development" });

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return isClient ? (
		<div
			className={`flex flex-col fixed top-14 w-full h-[83vh] transition-all duration-300 overflow-y-scroll ${
				showSidebarLeft ? "translate-x-0" : "-translate-x-full"
			} bg-white lg:translate-x-0 lg:w-72 lg:left-0 lg:h-screen lg:overflow-hidden`}
		>
			<div className="flex flex-col">
				<div className="px-4 pt-2">
					<h3 className="text-sm">Escolha um idioma para prática</h3>
				</div>
				<div className="flex flex-col gap-2 bg-white p-2 rounded-md">
					{mockLanguageOptions.map((option, index) => (
						<button
							key={index}
							className={`flex flex-row justify-normal items-center gap-2 outline-none p-2 rounded-md active:brightness-90 ${
								selectedLanguage === option.id
									? "bg-green text-white"
									: "bg-lightGray text-black lg:hover:brightness-90"
							}`}
							onClick={() =>
								option.id === "EN" ? handleLanguageChange(option.id) : notify()
							}
							aria-label="a button to select a language"
						>
							<figure>
								<Image
									src={option.icon}
									width={24}
									height={24}
									alt={`logo ${option.language}`}
								/>
							</figure>
							<span className="text-md font-bold">{option.language}</span>
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-col">
				<div className="px-4 pt-2">
					<h3 className="text-sm">Nível de proeficiência para prática</h3>
				</div>
				<div className="flex flex-col gap-2 bg-white p-2 rounded-md">
					{mockDifficultyLevels.map((option, index) => (
						<button
							key={index}
							type="button"
							className={`flex flex-row justify-normal items-center gap-2 outline-none p-2 rounded-md active:brightness-90 ${
								selectedDifficulty === option.difficulty
									? "bg-yellow text-white"
									: "bg-lightGray text-black lg:hover:brightness-90"
							}`}
							onClick={() =>
								"easy" === option.difficulty ? handleDifficultyChange(option.difficulty) : notify()
							}
							selectedDria-label="a button to select a difficulty"
						>
							<span className="text-md font-bold">{option.language[selectedLanguage]}</span>
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-col">
				<div className="px-4 pt-2">
					<h3 className="text-sm">Quantidade de participantes em diálogo</h3>
				</div>
				<div className="flex flex-col gap-2 bg-white p-2 rounded-md">
					{mockPeopleCount.map((option, index) => (
						<button
							key={index}
							type="button"
							className={`flex flex-row justify-normal items-center gap-2 outline-none p-2 rounded-md active:brightness-90 ${
								selectedPeopleCount === option
									? "bg-blue text-white"
									: "bg-lightGray text-black lg:hover:brightness-90"
							}`}
							onClick={() =>
								2 === option ? handlePeopleCountChange(option) : notify()
							}
							aria-label="a button to select a count people"
						>
							<span className="text-md font-bold">{option} pessoas</span>
						</button>
					))}
				</div>
			</div>
		</div>
	) : null;
};
