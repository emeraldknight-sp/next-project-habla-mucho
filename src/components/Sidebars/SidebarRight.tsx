import React, { useContext } from "react";

import Image from "next/image";

import { FiEdit, FiFileText, FiHeart, FiInfo } from "react-icons/fi";

import { NavbarContext } from "@/context/NavbarContext";

export const SidebarRight = () => {
	const { showSidebarRight } = useContext(NavbarContext);

	return (
		<div
			className={`fixed top-14 w-full h-screen transition-all duration-300 ${
				showSidebarRight ? "translate-x-0" : "translate-x-full"
			} bg-white flex flex-col lg:right-0 lg:translate-x-0 lg:w-72`}
		>
			<div className="flex flex-col items-center gap-2 p-4">
				<figure>
					<Image
						src="/avatar.png"
						className="rounded-full ring-2 ring-green"
						width={100}
						height={100}
						alt="avatar profile"
					/>
				</figure>
				<div className="flex flex-col items-center gap-1">
					<p className="text-md font-bold">John Doe</p>
					<p className="text-sm">@johndoe</p>
					<p className="text-sm">Software Engineer</p>
				</div>
				<button
					type="button"
					className="flex flex-row items-center justify-center gap-1 ring-1 ring-black p-2  rounded-full"
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
	);
};
