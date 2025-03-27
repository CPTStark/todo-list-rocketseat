import { Trash2 } from "lucide-react";
import type { Task } from "../..";

interface CardTaskProps {
	task: Task;
	key: number;
	deleteTask: (taskId: number) => void;
}

export function CardTask({ task, key, deleteTask }: CardTaskProps) {
	// function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
	// 	console.log(event);
	// }

	return (
		<div
			key={key}
			className="w-full border-[1px] bg-base-gray-500 border-base-gray-400 rounded-lg flex items-center justify-between p-5"
		>
			<div className="flex gap-5 items-start">
				<button
					// value={String(task.checked)}
					// onChange={(ev) => handleCheckboxChange(ev)}
					type="button"
					className="p-2 rounded-full bg-base-gray-500 border-2 border-blue-light cursor-pointer"
				>
					{}
				</button>
				<span className="flex-wrap text-gray-100 text-[14px]">
					{task.content}
				</span>
			</div>
			<button
				type="button"
				className="group cursor-pointer p-2 rounded-full hover:bg-base-gray-400"
				onClick={() => deleteTask(task.id)}
			>
				<Trash2
					size={18}
					className="text-base-gray-300 group-hover:text-danger"
				/>
				{task.checked}
			</button>
		</div>
	);
}
