"use client";

import { createContext, useEffect, useMemo, useState } from "react";

import { ComponentProps } from "@/interfaces/ComponentProps";
import { UserProps } from "@/interfaces/UserProps";
import { usersData } from "@/mock/usersData";

export const UsersContext = createContext<UserProps>(usersData[1]);

export const UsersProvider = ({ children }: ComponentProps) => {
	const [user, setUser] = useState<UserProps>(usersData[1]);

	const users = useMemo(() => usersData, []);

	useEffect(() => {
		const index = Math.floor(Math.random() * users.length);
		const user = users[index];

		setUser(user);
	}, [users]);

	return <UsersContext.Provider value={user}>{children}</UsersContext.Provider>;
};
