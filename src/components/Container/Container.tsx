import { ComponentProps } from "@/interfaces/ComponentProps";

export const Container = ({ children }: ComponentProps) => {
	return (
		<div className="container mx-auto w-90 lg:w-90 lg:mx-72">{children}</div>
	);
};
