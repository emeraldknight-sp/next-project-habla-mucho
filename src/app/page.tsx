"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { FiCalendar, FiSearch } from "react-icons/fi";
import moment from "moment";
import "moment/locale/pt-br";

import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { SidebarLeft, SidebarRight } from "@/components/Sidebars";

import { AppProvider } from "@/context/AppContext";

export default function Home() {
	const date = moment().format("LL");
	const router = useRouter();

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
	};

	const optionsDialogs = [
		{
			title: "Aleatório",
			icon: "/surprise.png",
			color: "from-green to-blue",
		},
		{
			title: "Viagens",
			icon: "/travel.png",
			color: "from-purple to-blue",
			color2: "blue",
		},
		{
			title: "Sobrevivência",
			icon: "/survival.png",
			color: "from-pink to-purple",
		},
		{
			title: "Negócios",
			icon: "/handshake.png",
			color: "from-yellow to-red",
		},
		{
			title: "Atendimento",
			icon: "/conversation.png",
			color: "from-blue to-lightBlue",
		},
		{
			title: "Cultura",
			icon: "/drum.png",
			color: "from-blue to-green",
		},
		{
			title: "Diversão",
			icon: "/fun.png",
			color: "from-red to-yellow",
		},
		{
			title: "Educacional",
			icon: "/book.png",
			color: "from-red to-pink",
		},
	];

	return (
		<AppProvider>
			<div className="flex flex-row my-14">
				<SidebarLeft showSidebarLeft={showSidebarLeft} />
				<Main>
					<div className="bg-white rounded-md p-2 mb-4">
						<div className="flex flex-row items-center justify-between mb-2 lg:hidden">
							<div className="md:flex md:flex-row md:items-center md:justify-around md:flex-1 md:gap-1">
								<p className="text-sm md:text-lg flex flex-row items-center gap-1 align-middle">
									<span>
										<FiCalendar size={16} />
									</span>
									{date}
								</p>
								<p className="text-sm md:text-lg">
									Olá! Que bom te ver por aqui
								</p>
							</div>
							<figure>
								<Image
									src="/avatar.png"
									className="rounded-full shadow-md"
									width={40}
									height={40}
									alt="avatar profile"
								/>
							</figure>
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
							{optionsDialogs.map((dialog, index) => (
								<li
									key={index}
									className={`flex flex-row items-center justify-center bg-gradient-to-tr ${dialog.color} text-white text-sm break-all w-auto h-32 rounded-lg cursor-pointer transition ease-in-out duration-300 lg:hover:scale-95 lg:hover:brightness-90 active:brightness-90 `}
								>
									<button
										type="button"
										className="flex flex-col items-center justify-center gap-2"
										onClick={() =>
											router.push(`/dialog/${dialog.title.toLowerCase()}`)
										}
									>
										<figure>
											<Image
												src={`${dialog.icon}`}
												width={64}
												height={64}
												alt="icon"
											/>
										</figure>
										<span>{dialog.title}</span>
									</button>
								</li>
							))}
						</ul>
					</nav>
				</Main>
				<SidebarRight showSidebarRight={showSidebarRight} />
			</div>
			<Navbar handleClick={handleClick} />
		</AppProvider>
	);
}
