import { CirclePlus } from "lucide-react";
import type { Task } from "../..";

interface FormTaskProps {
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function FormTask({ setTasks }: FormTaskProps) {
	function handleForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const content = e.currentTarget.task.value;

		setTasks((state) => [
			...state,
			{
				id: Date.now(),
				content,
				checked: false,
			},
		]);

		e.currentTarget.task.value = "";
	}

	return (
		<form onSubmit={handleForm} className="flex gap-3">
			<input
				type="text"
				placeholder="Adicione uma nova tarefa"
				className="p-4 w-xl bg-base-gray-500 rounded-lg flex-1 outline-none border-2 border-transparent focus:border-purple-dark transition-borders duration-200"
				name="task"
				required
			/>
			<button
				type="submit"
				className="bg-blue-dark flex gap-2 p-4 items-center justify-center rounded-lg cursor-pointer hover:bg-blue-light transitions-colors duration-200"
			>
				Criar
				<CirclePlus />
			</button>
		</form>
	);
}
