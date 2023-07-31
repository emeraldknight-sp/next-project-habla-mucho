import React from "react";

import toast from "react-hot-toast";

import Image from "next/image";

import { Container } from "../Container";

import { optionsAmount } from "@/mock/optionsAmout";
import { optionsLanguage } from "@/mock/optionsLanguage";

import { SidebarLeftProps } from "@/interfaces/sidebarLeftProps";
import { useApp } from "@/context/AppContext";

export const SidebarLeft = ({ showSidebarLeft }: SidebarLeftProps) => {
	const { language, peopleCount, setLanguage, setPeopleCount } = useApp();

	const handleLanguageChange = (selectedLanguage: string) => {
		setLanguage(selectedLanguage);
		localStorage.setItem("selectedLanguage", selectedLanguage);
	};

	const handlePeopleCountChange = (selectedPeopleCount: number) => {
		setPeopleCount(selectedPeopleCount);
		localStorage.setItem("selectedPeopleCount", selectedPeopleCount.toString());
	};

	const notify = () =>
		toast.error("Em desenvolvimento.", { id: "development" });

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
								onClick={() =>
									option.id === "EN"
										? handleLanguageChange(option.id)
										: notify()
								}
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
								onClick={() =>
									2 === option ? handlePeopleCountChange(option) : notify()
								}
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
