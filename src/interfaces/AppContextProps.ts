import { Conversation } from "./Conversation";

export type OptionsLanguage = Conversation["language"]
export type OptionsPeopleCount = Conversation["people"]
export type OptionsDifficulty = Conversation["difficulty"]

export interface AppContextProps {
	selectedLanguage: OptionsLanguage;
	selectedPeopleCount: OptionsPeopleCount;
	selectedDifficulty: OptionsDifficulty;
	handleLanguageChange: (selectedLanguage: OptionsLanguage) => void;
	handlePeopleCountChange: (selectedPeople: OptionsPeopleCount) => void;
	handleDifficultyChange: (selectedDifficulty: OptionsDifficulty) => void;
}
