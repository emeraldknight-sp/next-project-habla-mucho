import { FiHome, FiList, FiSettings } from "react-icons/fi";

import { NavbarProps } from "@/interfaces/NavbarProps";

export const Navbar = ({ handleClick }: NavbarProps) => {
	return (
		<nav className="fixed bottom-0 left-0 w-full bg-yellow px-4 py-2 lg:hidden">
			<ul className="flex flex-row justify-center items-center gap-8 ">
				<button
					type="button"
					className="bg-white text-yellow p-2 rounded-full"
					onClick={() => handleClick("left")}
				>
					<FiList size={24} />
				</button>
				<button
					type="button"
					className="bg-white text-yellow rounded-full shadow-lg p-2"
					onClick={() => handleClick("")}
				>
					<FiHome size={24} />
				</button>
				<button
					type="button"
					className="bg-white text-yellow rounded-full shadow-lg p-2"
					onClick={() => handleClick("right")}
				>
					<FiSettings size={24} />
				</button>
			</ul>
		</nav>
	);
};
