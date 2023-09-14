"use client";

import { createContext, useEffect, useMemo, useState } from "react";

import { ComponentProps } from "@/interfaces/ComponentProps";
import { User } from "@/interfaces/Options";

import { mockUsers } from "@/mock/appData";

export const UsersContext = createContext<User>(mockUsers[1]);

export const UsersProvider = ({ children }: ComponentProps) => {
	const [user, setUser] = useState<User>(mockUsers[1]);

	const users = useMemo(() => mockUsers, []);

	useEffect(() => {
		const index = Math.floor(Math.random() * users.length);
		const user = users[index];

		setUser(user);
	}, [users]);

	return <UsersContext.Provider value={user}>{children}</UsersContext.Provider>;
};
