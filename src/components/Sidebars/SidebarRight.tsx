"use client"

import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";

import { FiEdit, FiFileText, FiHeart, FiInfo } from "react-icons/fi";

import { NavbarContext } from "@/context/NavbarContext";
import { UsersContext } from "@/context/UsersContext";

export const SidebarRight = () => {
	const { showSidebarRight } = useContext(NavbarContext);

	const { avatar, firstName, lastName, occupation } = useContext(UsersContext);

	const nickname = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return isClient ? (
		<div
			className={`fixed top-14 w-full h-screen transition-all duration-300 ${
				showSidebarRight ? "translate-x-0" : "translate-x-full"
			} bg-white flex flex-col lg:right-0 lg:translate-x-0 lg:w-72 lg:border-l lg:border-solid lg:border-lightGray`}
		>
			<div className="flex flex-col items-center gap-2 p-4">
				<figure>
					<Image
						src={`${avatar}`}
						className="rounded-full ring-2 ring-green"
						width={100}
						height={100}
						quality={100}
						alt="Image"
						key={`${firstName.toLowerCase()}-image`}
						priority
					/>
				</figure>
				<div className="flex flex-col items-center">
					<p className="text-md font-bold">{`${firstName} ${lastName}`}</p>
					<p className="text-sm">@{`${nickname}`}</p>
					<p className="text-sm">{`${occupation}`}</p>
				</div>
				<button
					type="button"
					className="flex flex-row items-center justify-center gap-1 ring-1 ring-black p-2  rounded-full"
					aria-label="click here to edit profile"
				>
					<FiEdit size={16} />
					<span className="text-black text-xs">Editar perfil</span>
				</button>
			</div>
			<div className="px-4 py-2">
				<ul>
					<li className="flex flex-row justify-between py-2 border-b-2 border-lightGray">
						<span className="text-sm text-black">Idioma da página</span>
						<select
							name="menu"
							id="menu"
							className="outline-none bg-transparent text-sm text-black"
						>
							<option value="PT">Português</option>
							<option value="EN">English</option>
							<option value="ES">Español</option>
						</select>
					</li>
					<li className="flex flex-row justify-start items-center gap-1 py-2 border-b-2 border-lightGray">
						<FiHeart size={16} />
						<span className="text-sm text-black">Amigos</span>
					</li>
					<li className="flex flex-row justify-start items-center gap-1 py-2 border-b-2 border-lightGray">
						<FiFileText size={16} />
						<span className="text-sm text-black">Licença</span>
					</li>
					<li className="flex flex-row justify-start items-center gap-1 py-2 border-b-2 border-lightGray">
						<FiInfo size={16} />
						<span className="text-sm text-black">Sobre</span>
					</li>
				</ul>
			</div>
		</div>
	) : null;
};