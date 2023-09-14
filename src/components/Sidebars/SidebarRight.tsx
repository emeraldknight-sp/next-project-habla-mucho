"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import { NavbarContext } from "@/context/NavbarContext";
import { AppContext } from "@/context/AppContext";
import { UsersContext } from "@/context/UsersContext";

import { Profile } from "../Profile";

import {
	FiFileText,
	FiGlobe,
	FiHeart,
	FiInfo,
	FiMoon,
	FiSun,
} from "react-icons/fi";
import { User } from "@/interfaces/Options";
import { mockUsers } from "@/mock/appData";

export const SidebarRight = () => {
	const { showSidebarRight } = useContext(NavbarContext);

	const { selectedTheme, handleThemeChange } = useContext(AppContext);

	const [openOption, setOpenOption] = useState(0);

	const handleClick = (option: number) => {
		if (option === openOption) {
			setOpenOption(0);
		} else {
			setOpenOption(option);
		}
	};

	const { firstName } = useContext(UsersContext);

	const listFriend: User[] = mockUsers.filter(
		(user) => user.firstName !== firstName,
	);

	// const listFriend: UserProps[] = [];

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// if (listFriend.length > 0) {
	// 	return (
	// 		<div className="flex flex-col justify-center items-center">
	// 			<span className={"text-xs text-black font-bold"}>
	// 				Você não tem amigos.
	// 			</span>
	// 		</div>
	// 	);
	// }

	return isClient ? (
		<div
			className={`fixed top-14 w-full h-screen transition-all duration-300 ${
				showSidebarRight ? "translate-x-0" : "translate-x-full"
			} bg-white flex flex-col lg:right-0 lg:translate-x-0 lg:w-72 lg:border-l lg:border-solid lg:border-lightGray`}
		>
			<Profile />
			<div className="px-4 py-2 overflow-auto">
				<ul>
					<li className="flex flex-row justify-between py-2 border-b-2 border-lightGray">
						<div className="flex flex-row justify-start items-center gap-2">
							<FiGlobe size={16} />
							<span className="text-sm text-black">Idioma da página</span>
						</div>
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
					<li className="flex flex-col justify-between py-2 border-b-2 border-lightGray">
						<button
							type="button"
							className="flex flex-row justify-start items-center gap-2 outline-none"
							onClick={() => handleClick(1)}
						>
							<FiHeart size={16} />
							<span className="text-sm text-black">Amigos</span>
						</button>
						<div
							className={`transition-all duration-500 ${
								openOption === 1 ? "opacity-100 h-auto mt-3" : "opacity-0 h-0"
							}`}
						>
							<ul
								className={`flex flex-col justify-start items-start gap-4 ${
									openOption === 1 ? "visible" : "hidden"
								}`}
							>
								{listFriend.map((element, index) => (
									<li
										key={index}
										className="flex flex-row justify-start items-center gap-2"
									>
										<Image
											src={element.avatar}
											width={40}
											height={40}
											alt="avatar"
											className="rounded-full border-green border-2"
										/>
										<span className="text-sm">{`${element.firstName} ${element.lastName}`}</span>
									</li>
								))}
							</ul>
						</div>
					</li>
					<li className="flex flex-row justify-between py-2 border-b-2 border-lightGray">
						<div className="flex flex-row justify-start items-center gap-2">
							{selectedTheme ? (
								<FiMoon size={16} className="duration-300" />
							) : (
								<FiSun size={16} className="duration-300" />
							)}
							<span className="text-sm text-black">Tema</span>
						</div>
						<div className="flex items-center justify-center">
							<button
								type="button"
								className="w-8 h-4 p bg-lightGray rounded-full outline-none"
								onClick={handleThemeChange}
							>
								<div
									className={`bg-green w-3 h-3 rounded-full shadow-md transition-transform transform duration-300 ${
										selectedTheme ? "translate-x-4" : "translate-x-1"
									}`}
								></div>
							</button>
						</div>
					</li>
					<li
						className={`flex flex-col justify-start items-start py-2 border-b-2 border-lightGray`}
					>
						<button
							type="button"
							className="flex flex-row justify-start items-center gap-2 cursor-pointer outline-none"
							onClick={() => handleClick(2)}
						>
							<FiFileText size={16} />
							<span className="text-sm text-black">Licença</span>
						</button>
						<div
							className={`flex flex-col justify-start items-start gap-1 transition-all duration-500 ${
								openOption === 2
									? "opacity-100 max-h-auto mt-3"
									: "opacity-0 max-h-0 mt-0"
							}`}
						>
							<p
								className={`text-xs text-black text-justify ${
									openOption === 2 ? "visible" : "hidden"
								}`}
							>
								Copyright&copy; 2023 David Almeida
								<br />
								Permission is hereby granted, free of charge, to any person
								obtaining a copy of this software and associated documentation
								files (the &quot;Software&quot;), to deal in the Software
								without restriction, including without limitation the rights to
								use, copy, modify, merge, publish, distribute, sublicense,
								and/or sell copies of the Software, and to permit persons to
								whom the Software is furnished to do so, subject to the
								following conditions:
								<br />
								The above copyright notice and this permission notice shall be
								included in all copies or substantial portions of the Software.
								<br />
								THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
								ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
								WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
								AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
								HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
								WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
								FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
								OTHER DEALINGS IN THE SOFTWARE.
							</p>
						</div>
					</li>
					<li
						className={`flex flex-col justify-start items-start py-2 border-b-2 border-lightGray`}
					>
						<button
							type="button"
							className="flex flex-row justify-start items-center gap-2 w-full cursor-pointer outline-none"
							onClick={() => handleClick(3)}
						>
							<FiInfo size={16} />
							<span className="text-sm text-black">Sobre</span>
						</button>
						<div
							className={`transition-all duration-500 ${
								openOption === 3 ? "opacity-100 h-auto mt-3" : "opacity-0 h-0"
							}`}
						>
							<p
								className={`text-xs text-black text-justify ${
									openOption === 3 ? "visible" : "hidden"
								}`}
							>
								Um projeto desenvolvido para aprendizado de novos idiomas feito
								com Next.js, Tailwind CSS e consumo de dados pelo Firebase, um
								banco de dados NoSQL.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	) : null;
};
