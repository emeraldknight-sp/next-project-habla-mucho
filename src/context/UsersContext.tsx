"use client";

import { createContext, useEffect, useMemo, useState } from "react";

import { ComponentProps } from "@/interfaces/ComponentProps";
import { UserProps } from "@/interfaces/UserProps";

export const UsersContext = createContext<UserProps>({
	id: 0,
	firstName: "",
	lastName: "",
	avatar: "",
	occupation: "",
});

export const UsersProvider = ({ children }: ComponentProps) => {
	const [user, setUser] = useState<UserProps>({
		id: 0,
		firstName: "",
		lastName: "",
		avatar: "",
		occupation: "",
	});

	const users = useMemo(
		() => [
			{
				id: 1,
				firstName: "Walter",
				lastName: "White",
				avatar: "/heisenberg.webp",
				occupation: "Professor",
			},
			{
				id: 2,
				firstName: "Jesse",
				lastName: "Pinkman",
				avatar: "/jesse.webp",
				occupation: "Estudante",
			},
			{
				id: 3,
				firstName: "Jane",
				lastName: "Margolis",
				avatar: "/jane.webp",
				occupation: "",
			},
			{
				id: 4,
				firstName: "Saul",
				lastName: "Goodman",
				avatar: "/jimmy.webp",
				occupation: "Advogado",
			},
			{
				id: 5,
				firstName: "Mike",
				lastName: "Ehrmantraut",
				avatar: "/ehrmantraut.webp",
				occupation: "Investigador",
			},
			{
				id: 6,
				firstName: "Gustavo",
				lastName: "Fring",
				avatar: "/gus.webp",
				occupation: "Empresário",
			},
		],
		[],
	);

	useEffect(() => {
		const index = Math.floor(Math.random() * users.length);
		const user = users[index];

		setUser(user);
	}, [users]);

	return <UsersContext.Provider value={user}>{children}</UsersContext.Provider>;
};
