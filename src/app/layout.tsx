import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";

import { Toaster } from "react-hot-toast";
import { Header } from "@/components/Header";

import { AppProvider } from "@/context/AppContext";
import { ChatProvider } from "@/context/ChatContext";
import { NavbarProvider } from "@/context/NavbarContext";
import { UsersProvider } from "@/context/UsersContext";

import "./globals.css";

const raleway = Raleway({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-raleway",
});

const open_sans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-open-sans",
});

export const metadata: Metadata = {
	title: "Project HablaMucho",
	abstract:
		"Explore o mundo com facilidade e estilo com o nosso aplicativo de viagens intuitivo. Planeje suas aventuras, faça reservas com confiança e mergulhe nas culturas locais com nosso guia de viagem inteligente. Descubra o seu próximo destino de sonho e embarque em uma jornada inesquecível. Baixe agora e comece a explorar o mundo!",
	applicationName: "HablaMucho",
	authors: { name: "David Almeida", url: "contato.davidalmeida@outlook.com" },
	generator: "Next.js",
	keywords:
		"idiomas, aprender idiomas, prática de conversação, viagens, cultura, diálogos, interatividade, comunicação, educação, aplicativo de idiomas, aplicativo móvel, línguas estrangeiras, desenvolvimento pessoal, experiência de aprendizado, aplicativo de viagem",
	themeColor: "#ffffff",
	colorScheme: "light",
	viewport: "width=device-width, initial-scale=1",
	creator: "Next.js",
	publisher: "Vercel",
	robots: "index, follow",
	manifest: "/site.webmanifest",
	icons: [
		{ rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
	],
	appleWebApp: {
		capable: true,
		title: "Project HablaMucho",
		statusBarStyle: "default",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={`${raleway.variable} ${open_sans.variable}`}>
			<body>
				<AppProvider>
					<NavbarProvider>
						<UsersProvider>
							<ChatProvider>
								<Toaster position="bottom-center" reverseOrder={false} />
								<Header />
								{children}
							</ChatProvider>
						</UsersProvider>
					</NavbarProvider>
				</AppProvider>
			</body>
		</html>
	);
}
