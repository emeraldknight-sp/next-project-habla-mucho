"use client";

import { setChat } from "@/api";
import { Main } from "@/components/Main";
import { conversation } from "@/mock/chat";

export default function Admin() {

	return (
		<Main>
			<button
				type="button"
				className="bg-red m-40"
				onClick={() => setChat(conversation)}
			>
				Enviar chat
			</button>
		</Main>
	);
}
