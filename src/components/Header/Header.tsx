import Image from "next/image";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";

export const Header = () => {
	return (
		<header className="flex flex-row items-center justify-between p-4 bg-green">
			<div>
				<Link
					href="/"
					className="flex flex-row items-center justify-center gap-2"
				>
					<Image
						src="/logo.png"
						width={40}
						height={40}
						alt="Logo"
						className="shadow-xl rounded-full"
					/>
					<h1 className="text-xl text-white align-middle">
						Project Habla Mucho
					</h1>
				</Link>
			</div>
			<div>
				<button
					type="button"
					className="flex flex-row items-start justify-center"
				>
					<FiMenu size={24} />
				</button>
			</div>
		</header>
	);
};
