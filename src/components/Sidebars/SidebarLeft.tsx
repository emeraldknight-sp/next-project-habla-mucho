import React, { useContext } from "react";

import toast from "react-hot-toast";

import Image from "next/image";

import { optionsAmount } from "@/mock/optionsAmout";
import { optionsLanguage } from "@/mock/optionsLanguage";

import { AppContext } from "@/context/AppContext";
import { NavbarContext } from "@/context/NavbarContext";

export const SidebarLeft = () => {
	const { language, peopleCount, setLanguage, setPeopleCount } =
		useContext(AppContext);
	const { showSidebarLeft } = useContext(NavbarContext);

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
			className={`flex flex-col fixed top-14 w-full h-screen transition-all duration-300 ${
				showSidebarLeft ? "translate-x-0" : "-translate-x-full"
			} bg-white lg:translate-x-0 lg:w-72 lg:left-0`}
		>
			<div className="flex flex-col">
				<div className="px-4 pt-2">
					<h3 className="text-sm">Escolha um idioma para praticar</h3>
				</div>
				<div className="flex flex-col gap-2 bg-white p-2 rounded-md">
					{optionsLanguage.map((option, index) => (
						<button
							key={index}
							className={`flex flex-row justify-normal items-center gap-2 outline-none p-2 rounded-md active:brightness-90 ${
								language === option.id
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
			<div className="flex flex-col md:flex-1">
				<div className="px-4 pt-2">
					<h3 className="text-sm">Quantidade de participantes em diálogo</h3>
				</div>
				<div className="flex flex-col gap-2 bg-white p-2 rounded-md">
					{optionsAmount.map((option, index) => (
						<button
							key={index}
							type="button"
							className={`flex flex-row justify-normal items-center gap-2 outline-none p-2 rounded-md active:brightness-90 ${
								peopleCount === option
									? "bg-yellow text-white"
									: "bg-lightGray text-black lg:hover:brightness-90"
							}`}
							onClick={() =>
								2 === option ? handlePeopleCountChange(option) : notify()
							}
							aria-label="a button to select amount people"
						>
							<span className="text-md font-bold">{option} pessoas</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
