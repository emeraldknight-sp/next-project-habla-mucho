import { Container } from "../Container";

import { MainProps } from "@/interfaces/MainProps";

export const Main = ({ children }: MainProps) => {
	return (
		<main className="flex flex-1 flex-row items-center justify-center p-4">
			<Container>{children}</Container>
		</main>
	);
};
