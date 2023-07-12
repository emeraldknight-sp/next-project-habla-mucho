import Link from "next/link";
import { FiHome, FiList, FiSettings } from "react-icons/fi";

export const Navbar = () => {
	return (
		<nav className="fixed bottom-0 left-0 w-full bg-yellow p-4">
			<ul className="flex flex-row justify-center items-center gap-8 ">
				<li className="bg-white rounded-full shadow-lg p-2">
					<Link href="/" className="text-yellow">
						<FiList size={24} />
					</Link>
				</li>
				<li className="bg-white rounded-full shadow-lg p-2">
					<Link href="/" className="text-yellow">
						<FiHome size={24} />
					</Link>
				</li>
				<li className="bg-white rounded-full shadow-lg p-2">
					<Link href="/" className="text-yellow">
						<FiSettings size={24} />
					</Link>
				</li>
			</ul>
		</nav>
	);
};
