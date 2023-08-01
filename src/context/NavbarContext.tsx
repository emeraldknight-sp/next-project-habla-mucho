"use client";

import React, { createContext, useState } from "react";

import { ComponentProps } from "@/interfaces/ComponentProps";
import { NavbarContextProps } from "@/interfaces/NavbarContextProps";

export const NavbarContext = createContext<NavbarContextProps>({
	showSidebarLeft: false,
	showSidebarRight: false,
	handleClick: () => 0,
});

export const NavbarProvider = ({ children }: ComponentProps) => {
	const [showSidebarLeft, setShowSidebarLeft] = useState(false);
	const [showSidebarRight, setShowSidebarRight] = useState(false);

	const handleClick = (side: string) => {
		if (side === "left") {
			setShowSidebarLeft(!showSidebarLeft);
			setShowSidebarRight(false);
		} else if (side === "right") {
			setShowSidebarRight(!showSidebarRight);
			setShowSidebarLeft(false);
		} else {
			setShowSidebarLeft(false);
			setShowSidebarRight(false);
		}

		return 0;
	};

	return (
		<NavbarContext.Provider
			value={{ showSidebarLeft, showSidebarRight, handleClick }}
		>
			{children}
		</NavbarContext.Provider>
	);
};
