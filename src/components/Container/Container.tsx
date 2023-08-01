import { ContainerProps } from "@/interfaces/ContainerProps";

export const Container = ({ children }: ContainerProps) => {
	return <div className="container mx-auto w-90 lg:w-90 lg:mx-72">{children}</div>;
};
