import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<div className="flex items-center gap-2">
			<Link href="/" className="flex items-center gap-2 outline-none">
				<Image
					src="/logo.png"
					width={40}
					height={40}
					alt="Logo"
					className="shadow-xl rounded-full"
				/>
				<h1 className="font-title text-xl font-semibold text-white">Project HablaMucho</h1>
			</Link>
		</div>
	);
};
