import { UsersContext } from "@/context/UsersContext";
import Image from "next/image";
import { useContext } from "react";
import { FiEdit } from "react-icons/fi";

export const Profile = () => {
	const { avatar, firstName, lastName, occupation, nickname } =
		useContext(UsersContext);

	return (
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
				className="flex flex-row items-center justify-center gap-1 p-2 rounded-full outline-none text-xs text-black hover:text-green duration-300 transition-colors"
				aria-label="click here to edit profile"
			>
				<FiEdit size={16} />
				<span>Editar perfil</span>
			</button>
		</div>
	);
};
