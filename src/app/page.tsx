"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

import { FiCalendar, FiSearch } from "react-icons/fi";
import moment from "moment";
import "moment/locale/pt-br";

import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { SidebarLeft, SidebarRight } from "@/components/Sidebars";
import { UsersContext } from "@/context/UsersContext";
import { OptionDialog } from "@/interfaces/OptionDialogProps";

export default function Home() {
	const date = moment().format("LL");
	const router = useRouter();

	const { avatar, firstName } = useContext(UsersContext);

	const optionsDialogs: OptionDialog[] = [
		{
			title: "Aleatório",
			url: "random",
			icon: "/surprise.png",
			color1: "from-green",
			color2: "to-blue",
		},
		{
			title: "Viagens",
			url: "travel",
			icon: "/travel.png",
			color1: "from-purple",
			color2: "to-blue",
		},
		{
			title: "Sobrevivência",
			url: "survival",
			icon: "/survival.png",
			color1: "from-pink",
			color2: "to-purple",
		},
		{
			title: "Negócios",
			url: "business",
			icon: "/handshake.png",
			color1: "from-yellow",
			color2: "to-red",
		},
		{
			title: "Atendimento",
			url: "conversation",
			icon: "/conversation.png",
			color1: "from-blue",
			color2: "to-lightBlue",
		},
		{
			title: "Cultura",
			url: "culture",
			icon: "/drum.png",
			color1: "from-blue",
			color2: "to-green",
		},
		{
			title: "Diversão",
			url: "fun",
			icon: "/fun.png",
			color1: "from-red",
			color2: "to-yellow",
		},
		{
			title: "Educacional",
			url: "educational",
			icon: "/book.png",
			color1: "from-red",
			color2: "to-pink",
		},
	];

	return (
		<>
			<div className="flex flex-row my-14">
				<SidebarLeft />
				<Main>
					<div className="bg-white rounded-md p-2 mb-4">
						<div className="flex flex-row items-center justify-between mb-2 lg:hidden">
							<div className="md:flex md:flex-row md:items-center md:justify-around md:flex-1 md:gap-1">
								<p className="text-sm md:text-md flex flex-row items-center gap-1 align-middle">
									<span>
										<FiCalendar size={16} />
									</span>
									{date}
								</p>
								<p className="text-sm md:text-md">
									Olá! Que bom te ver, {`${firstName}`}!
								</p>
							</div>
							<figure>
								<Image
									src={`${avatar}`}
									className="rounded-full shadow-md"
									width={40}
									height={40}
									quality={40}
									alt="Image"
									key={`${firstName.toLowerCase()}-image`}
								/>
							</figure>
						</div>
						<div className="flex flex-row items-center gap-2 bg-lightGray rounded-md p-2">
							<input
								type="text"
								className="bg-transparent text-sm outline-none w-full"
								placeholder="Buscar..."
							/>
							<button
								type="button"
								className="outline-none"
								aria-label="click here to search something"
							>
								<span>
									<FiSearch size={24} />
								</span>
							</button>
						</div>
					</div>
					<nav className="flex flex-col gap-4 bg-white rounded-md p-2">
						<ul className="grid grid-cols-2 lg:grid-cols-2 gap-4">
							{optionsDialogs.map((dialog, index) => (
								<li
									key={index}
									className={`flex flex-row items-center justify-center bg-gradient-to-tr ${dialog.color1} ${dialog.color2} text-white text-sm break-all w-auto h-32 rounded-lg cursor-pointer transition ease-in-out duration-300 lg:hover:scale-95 lg:hover:brightness-90 active:brightness-90 `}
								>
									<button
										type="button"
										className="flex flex-col items-center justify-center gap-2 outline-none"
										onClick={() => router.push(`/dialog?d=${dialog.url}`)}
									>
										<figure>
											<Image
												src={`${dialog.icon}`}
												width={64}
												height={64}
												alt="icon"
												priority
											/>
										</figure>
										<span>{dialog.title}</span>
									</button>
								</li>
							))}
						</ul>
					</nav>
				</Main>
				<SidebarRight />
			</div>
			<Navbar />
		</>
	);
}
