import { Container } from "@/components/Container";
import moment from "moment";
import "moment/locale/pt-br";
import { FiUser } from "react-icons/fi";

export default function Home() {
	const date = moment().format("LL");

	console.log(moment.locale());
	console.log();

	return (
		<main className="p-4">
			<Container>
				<div className="bg-white rounded-md p-4 mb-4">
					<div>
						<div>
							<p>{date}</p>
							<p>Olá, que bom te ver por aqui!</p>
						</div>
						<div>
							<figure>
								<FiUser size={24} />
							</figure>
						</div>
					</div>
					<div>
						<span>icon</span>
						<input type="text" />
						<button type="button">
							<span>icon</span>
						</button>
					</div>
				</div>
				<nav className="bg-white rounded-md p-4">
					<h3>Categorias</h3>
					<ul>
						<li>Random</li>
						<li>Travel</li>
						<li>Survival</li>
						<li>Business</li>
						<li>Customer service</li>
						<li>Culture</li>
						<li>Funny</li>
						<li>Educational</li>
					</ul>
				</nav>
			</Container>
		</main>
	);
}
