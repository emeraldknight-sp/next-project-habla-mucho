import { Container } from "../Container";
import { Logo } from "../Logo";

export const Header = () => {
	return (
		<header className="flex items-center justify-between fixed top-0 left-0 w-screen bg-green px-4 py-2">
			<Container>
				<Logo />
			</Container>
		</header>
	);
};
