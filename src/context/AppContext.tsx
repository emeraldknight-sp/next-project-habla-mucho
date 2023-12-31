"use client";

import React, { createContext, useEffect, useState } from "react";

import { AppContextProps } from "@/interfaces/AppContextProps";
import { ComponentProps } from "@/interfaces/ComponentProps";

const AppContext = createContext<AppContextProps>({
	language: "",
	peopleCount: 0,
	setLanguage: () => "",
	setPeopleCount: () => 0,
});

function AppProvider({ children }: ComponentProps) {
	const [language, setLanguage] = useState("");
	const [peopleCount, setPeopleCount] = useState(0);

	useEffect(() => {
		const storedLanguage = localStorage.getItem("selectedLanguage");
		const storedPeopleCount = localStorage.getItem("selectedPeopleCount");

		if (storedLanguage) {
			setLanguage(storedLanguage);
		}

		if (storedPeopleCount) {
			setPeopleCount(Number(storedPeopleCount));
		}
	}, []);

	return (
		<AppContext.Provider
			value={{ language, peopleCount, setLanguage, setPeopleCount }}
		>
			{children}
		</AppContext.Provider>
	);
}

// function useApp() {
// 	const context = useContext(AppContext);
// 	if (!context) {
// 		throw new Error("useApp deve ser usado dentro de um AppProvider");
// 	}
// 	return context;
// }

export { AppProvider, AppContext };
