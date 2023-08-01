import { ComponentProps } from "@/interfaces/ComponentProps";
import { Container } from "../Container";

export const Main = ({ children }: ComponentProps) => {
	return (
		<main className="flex flex-1 flex-row items-start justify-center p-4">
			<Container>{children}</Container>
		</main>
	);
};
