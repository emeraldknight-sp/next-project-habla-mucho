"use client";

import React, { createContext, useEffect, useState } from "react";

import { ComponentProps } from "@/interfaces/ComponentProps";
import {
	AppContextProps,
	OptionsDifficulty,
	OptionsLanguage,
	OptionsPeopleCount,
} from "@/interfaces/AppContextProps";

const AppContext = createContext<AppContextProps>({
	selectedLanguage: "EN",
	selectedPeopleCount: 2,
	selectedDifficulty: "easy",
	handleLanguageChange: () => "",
	handlePeopleCountChange: () => 0,
	handleDifficultyChange: () => "",
});

function AppProvider({ children }: ComponentProps) {
	const [selectedLanguage, setSelectedLanguage] =
		useState<OptionsLanguage>("EN");

	const [selectedPeopleCount, setSelectedPeople] =
		useState<OptionsPeopleCount>(2);
		
	const [selectedDifficulty, setSelectedDifficulty] =
		useState<OptionsDifficulty>("easy");

	const handleLanguageChange = (selectedLanguage: OptionsLanguage) => {
		setSelectedLanguage(selectedLanguage);
		localStorage.setItem("selectedLanguage", selectedLanguage);
	};

	const handlePeopleCountChange = (selectedPeopleCount: OptionsPeopleCount) => {
		setSelectedPeople(selectedPeopleCount);
		localStorage.setItem("selectedPeopleCount", selectedPeopleCount.toString());
	};

	const handleDifficultyChange = (selectedDifficulty: OptionsDifficulty) => {
		setSelectedDifficulty(selectedDifficulty);
		localStorage.setItem("selectedDifficulty", selectedDifficulty);
	};

	useEffect(() => {
		const storedLanguage = localStorage.getItem("selectedLanguage");
		const storedPeopleCount = localStorage.getItem("selectedPeopleCount");
		const storedDifficulty = localStorage.getItem("selectedDifficulty");

		if (storedLanguage) {
			setSelectedLanguage(storedLanguage as OptionsLanguage);
		}

		if (storedPeopleCount) {
			setSelectedPeople(Number(storedPeopleCount) as OptionsPeopleCount);
		}

		if (storedDifficulty) {
			setSelectedDifficulty(storedDifficulty as OptionsDifficulty);
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				selectedLanguage,
				selectedPeopleCount,
				selectedDifficulty,
				handleLanguageChange,
				handlePeopleCountChange,
				handleDifficultyChange,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppProvider, AppContext };
