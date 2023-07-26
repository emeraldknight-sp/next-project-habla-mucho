import { Container } from "../Container";
import { ReactNode } from "react";

interface MainProps {
	children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
	return (
		<main className="flex flex-1 p-4 my-14">
			<Container>{children}</Container>
		</main>
	);
};
