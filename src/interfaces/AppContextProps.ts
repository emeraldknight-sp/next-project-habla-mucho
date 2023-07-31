export interface AppContextProps {
	language: string;
	peopleCount: number;
	setLanguage: (selectedLanguage: string) => void;
	setPeopleCount: (selectedPeopleCount: number) => void;
}
