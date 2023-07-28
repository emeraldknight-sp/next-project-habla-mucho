import React, { useEffect, useState } from "react";

import Image from "next/image";

import { Container } from "../Container";

import { optionsAmount } from "@/mock/optionsAmout";
import { optionsLanguage } from "@/mock/optionsLanguage";

import { SidebarLeftProps } from "@/interfaces/sidebarLeftProps";

export const SidebarLeft = ({ showSidebarLeft }: SidebarLeftProps) => {
	const [language, setLanguage] = useState("");
	const [peopleCount, setPeopleCount] = useState("");

	useEffect(() => {
		const storedLanguage = localStorage.getItem("selectedLanguage");
		const storedPeopleCount = localStorage.getItem("selectedPeopleCount");

		if (storedLanguage) {
			setLanguage(storedLanguage);
		}

		if (storedPeopleCount) {
			setPeopleCount(storedPeopleCount);
		}
	}, []);

	const handleLanguageChange = (selectedLanguage: string) => {
		setLanguage(selectedLanguage);
		localStorage.setItem("selectedLanguage", selectedLanguage);
	};

	const handlePeopleCountChange = (selectedPeopleCount: string) => {
		setPeopleCount(selectedPeopleCount);
		localStorage.setItem("selectedPeopleCount", selectedPeopleCount);
	};

	return (
		<div
			className={`fixed top-14 w-full h-screen transition-all duration-300 ${
				showSidebarLeft ? "translate-x-0" : "-translate-x-full"
			} bg-white flex flex-col md:flex-row`}
		>
			<Container>
				<div className="flex flex-col md:flex-1">
					<div className="px-4 pt-2">
						<h3 className="text-sm">Escolha um idioma para praticar</h3>
					</div>
					<div className="flex flex-col gap-2 bg-white p-2 rounded-md">
						{optionsLanguage.map((option, index) => (
							<button
								key={index}
								className={`flex flex-row justify-normal items-center gap-2  p-2 rounded-md ${
									language === option.id
										? "bg-green text-white"
										: "bg-lightGray text-black"
								}`}
								onClick={() => handleLanguageChange(option.id)}
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
				<div className="flex flex-col md:flex-1">
					<div className="px-4 pt-2">
						<h3 className="text-sm">Quantidade de participantes em diálogo</h3>
					</div>
					<div className="flex flex-col gap-2 bg-white p-2 rounded-md">
						{optionsAmount.map((option, index) => (
							<button
								key={index}
								type="button"
								className={`flex flex-row justify-normal items-center gap-2 p-2 rounded-md ${
									peopleCount === option
										? "bg-yellow text-white"
										: "bg-lightGray text-black"
								}`}
								onClick={() => handlePeopleCountChange(option)}
							>
								<span className="text-md font-bold">{option} pessoas</span>
							</button>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};
