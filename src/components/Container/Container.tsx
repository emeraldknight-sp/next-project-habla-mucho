import { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return <div className="container mx-auto w-90">{children}</div>;
};
