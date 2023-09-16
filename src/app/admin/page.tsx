import { setChat } from "@/api";
import { conversation } from "@/mock/chat";

export const admin = () => {
	return (
		<button type="button" onClick={() => setChat(conversation)}>
			Enviar chat
		</button>
	);
};
