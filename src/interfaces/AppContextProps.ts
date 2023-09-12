export interface AppContextProps {
	language: string;
	peopleCount: number;
	theme: boolean;
	setLanguage: (selectedLanguage: string) => void;
	setPeopleCount: (selectedPeopleCount: number) => void;
	setTheme: (selectedTheme: boolean) => void;
}
