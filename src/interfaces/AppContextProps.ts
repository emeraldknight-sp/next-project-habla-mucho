export interface AppContextProps {
	language: string;
	peopleCount: string;
	setLanguage: (selectedLanguage: string) => void;
	setPeopleCount: (selectedPeopleCount: string) => void;
}
