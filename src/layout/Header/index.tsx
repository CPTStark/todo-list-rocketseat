import logotodo from "../../assets/logo-todo.svg";

export function Header() {
	return (
		<header className="bg-base-gray-700 h-52 flex items-center justify-center">
			<img src={logotodo} alt="" />
		</header>
	);
}
