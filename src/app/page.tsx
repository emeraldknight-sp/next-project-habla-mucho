import { FiSearch, FiUser } from "react-icons/fi";
import moment from "moment";
import "moment/locale/pt-br";

import { Container } from "@/components/Container";
import Image from "next/image";

export default function Home() {
	const date = moment().format("LL");

	const arrayDialogs = [
		{
			title: "Random",
			icon: "/surprise.png",
			color: "from-green to-blue",
		},
		{
			title: "Travel",
			icon: "/travel.png",
			color: "from-purple to-blue",
		},
		{
			title: "Survival",
			icon: "/survival.png",
			color: "from-pink to-purple",
		},
		{
			color: "from-yellow to-red",
			title: "Business",
			icon: "/handshake.png",
		},
		{
			title: "Customer service",
			icon: "/conversation.png",
			color: "from-blue to-lightBlue",
		},
		{
			title: "Culture",
			icon: "/drum.png",
			color: "from-blue to-green",
		},
		{
			title: "Funny",
			icon: "/fun.png",
			color: "from-red to-yellow",
		},
		{
			title: "Educational",
			icon: "/book.png",
			color: "from-red to-pink",
		},
	];

	return (
		<main className="p-4 mb-32">
			<Container>
				<div className="bg-white rounded-md p-2 mb-4">
					<div className="flex flex-row items-center justify-between mb-2">
						<div className="md:flex md:flex-row md:items-center md:justify-around md:flex-1 md:gap-1">
							<p className="text-sm md:text-lg">{date}</p>
							<p className="text-sm md:text-lg">Olá! Que bom te ver por aqui</p>
						</div>
						<div>
							<figure className="p-2 rounded-full shadow-md">
								<FiUser size={24} />
							</figure>
						</div>
					</div>
					<div className="flex flex-row items-center gap-2 bg-lightGray rounded-md p-2">
						<input
							type="text"
							className="bg-transparent text-sm outline-none w-full"
							placeholder="Buscar..."
						/>
						<button type="button">
							<span>
								<FiSearch size={24} />
							</span>
						</button>
					</div>
				</div>
				<nav className="flex flex-col gap-4 bg-white rounded-md p-2">
					<ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
						{arrayDialogs.map((dialog, index) => (
							<li
								key={index}
								className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-tr ${dialog.color} text-white text-sm break-all w-auto h-32 rounded-lg cursor-pointer transition ease-in-out duration-300 hover:scale-95 hover:brightness-90`}
							>
								<figure>
									<Image
										src={`${dialog.icon}`}
										width={64}
										height={64}
										alt="dialog option"
									/>
								</figure>
								<span>{dialog.title}</span>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</main>
	);
}
