import { Container } from "../Container";

import { MainProps } from "@/interfaces/MainProps";

export const Main = ({ children }: MainProps) => {
	return (
		<main className="flex flex-1 p-4">
			<Container>{children}</Container>
		</main>
	);
};
