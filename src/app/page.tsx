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
import { optionDialog } from "@/interfaces/optionDialog";
// import { setChat } from "@/api";

export default function Home() {
	const date = moment().format("LL");
	const router = useRouter();

	const { avatar, firstName } = useContext(UsersContext);

	const optionsDialogs: optionDialog[] = [
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

	// const chat = {
	// 	id: 35,
	// 	title: "local_etiquette",
	// 	category: "travel",
	// 	language: "EN",
	// 	people: 2,
	// 	size: "long",
	// 	dialog: [
	// 		{
	// 			user: 1,
	// 			message:
	// 				"Hey there, fellow explorers! Ready for a double dose of cultural grace? We're diving into etiquettes – from sacred places to dining tables. Who's up for respectful adventures?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Hey, fellow adventurers! Get ready for a blend of cultural vibes as we explore the do's and don'ts in sacred spots and eateries. Ready to embrace the art of etiquette?",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"Absolutely, let's unlock the keys to blending in seamlessly. When it comes to sacred places, any pro tips for showing cultural respect?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Cultural respect? Start with 'Respect the silence' and 'Cover your shoulders.' It's like stepping into a world of traditions and reverence. Now, onto restaurant manners!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"'Respect the silence' and 'Cover your shoulders' are my cultural respect codes. And what if we're unsure about the menu in local eateries?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Menu mysteries? Try 'What's your specialty?' or 'Recommend something local!' to dive into culinary treasures. Now, let's sprinkle some dining manners!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"'What's your specialty?' and 'Recommend something local!' are my menu conversation starters. And how do we avoid being a noisy neighbor?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Noisy neighbor tips? If it's quiet around, lower your voice. It's the secret ingredient to being an considerate diner. Now, expressions to appreciate the meal!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"Lowering my voice, got it. About appreciating the meal, how do we show gratitude in a local flavor?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Gratitude game? Say 'This is amazing!' or 'Delicious, thank you!' and let your taste buds do the talking. Now, expressions that make conversations more exciting!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"'This is amazing!' and 'Delicious, thank you!' are my meal-time appreciation tokens. And what if we want to add a pinch of excitement to the chat?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Excitement mode? Try 'You won't believe what happened!' for story time. Now, back to sacred places, what if we want to ask questions?",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"'You won't believe what happened!' is my chat spark. And for sacred places, how do we seek guidance or information?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Guidance needed? Ask 'Can you tell us more?' or 'What's the significance?' and open the door to cultural insights. Now, let's talk about tipping!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"'Can you tell us more?' and 'What's the significance?' are my cultural curiosity starters. And when it comes to tipping, what's the local practice?",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"Tipping time? Check if it's customary, and if so, tip a percentage based on the local norm. Thanks for the chat, and may every interaction be a cultural embrace!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"Tipping, got it. Thanks for the local wisdom and being part of this double delight of cultural exploration!",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"No problemo, embrace the diversity with grace. Stay open, stay respectful, and let every cultural encounter be a delightful memory. Cheers to rich experiences!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"Absolutely, catch you later and remember, every step is a chance to honor the beauty of local traditions!",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"You bet, catch you on the flip side and keep that cultural respect shining in every interaction!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"For sure, until next time, let every gesture be a bridge to understanding and friendship!",
	// 		},
	// 		{
	// 			user: 2,
	// 			message:
	// 				"You too, until then, let every moment be a celebration of the cultural tapestry that surrounds us!",
	// 		},
	// 		{
	// 			user: 1,
	// 			message:
	// 				"Will do. Catch you later and remember, every 'hello' can be an invitation to connect across cultures!",
	// 		},
	// 	],
	// };

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
							{/* <button type="button" onClick={() => setChat(chat)}>Enviar chat</button> */}
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
										onClick={() =>
											router.push(`/dialog?d=${dialog.url}`)
										}
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
