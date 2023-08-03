"use client";

import { FiHome, FiList, FiSettings } from "react-icons/fi";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { NavbarContext } from "@/context/NavbarContext";

export const Navbar = () => {
	const { handleClick } = useContext(NavbarContext);
	const [isClient, setIsClient] = useState(false);
	const router = useRouter()

	useEffect(() => {
		setIsClient(true);
	}, []);

	return isClient ? (
		<nav className="fixed bottom-0 left-0 w-full bg-yellow px-4 py-2 lg:hidden">
			<ul className="flex flex-row justify-center items-center gap-8 ">
				<button
					type="button"
					className="bg-white text-yellow p-2 rounded-full"
					onClick={() => handleClick("left")}
					aria-label="click here to select your language and other settings"
				>
					<FiList size={24} />
				</button>
				<button
					type="button"
					className="bg-white text-yellow rounded-full shadow-lg p-2"
					onClick={() => {
						router.push("/");
						handleClick("");
					}}
					aria-label="click here to see the home page"
				>
					<FiHome size={24} />
				</button>
				<button
					type="button"
					className="bg-white text-yellow rounded-full shadow-lg p-2"
					onClick={() => handleClick("right")}
					aria-label="click here to see your account details"
				>
					<FiSettings size={24} />
				</button>
			</ul>
		</nav>
	) : null;
};
