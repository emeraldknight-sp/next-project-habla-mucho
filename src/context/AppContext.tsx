"use client";

import React, { createContext, useEffect, useState } from "react";

import { AppContextProps } from "@/interfaces/AppContextProps";
import { ComponentProps } from "@/interfaces/ComponentProps";

const AppContext = createContext<AppContextProps>({
	language: "",
	peopleCount: 0,
	theme: false,
	setLanguage: () => "",
	setPeopleCount: () => 0,
	setTheme: () => 0
});

function AppProvider({ children }: ComponentProps) {
	const [language, setLanguage] = useState("");
	const [peopleCount, setPeopleCount] = useState(0);
	const [theme, setTheme] = useState(false);

	// const changeTheme = () => {
	// 	setDarkTheme(!darkTheme);
	// };

	useEffect(() => {
		const storedLanguage = localStorage.getItem("selectedLanguage");
		const storedPeopleCount = localStorage.getItem("selectedPeopleCount");
		const storedTheme = localStorage.getItem("selectedTheme");

		
		if (storedLanguage) {
			setLanguage(storedLanguage);
		}
		
		if (storedPeopleCount) {
			setPeopleCount(Number(storedPeopleCount));
		}

		if (storedTheme) {
			setTheme(!theme)
		}
	}, []);

	return (
		<AppContext.Provider
			value={{ language, peopleCount, theme, setLanguage, setPeopleCount, setTheme }}
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
