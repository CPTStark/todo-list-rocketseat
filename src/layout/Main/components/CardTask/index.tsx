import { Trash2 } from "lucide-react";
import type { Task } from "../..";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CardTaskProps {
	task: Task;
	key: number;
	deleteTask: (taskId: number) => void;
	setTasks: (tasks: Task[]) => void;
}

export function CardTask({ task, key, deleteTask, setTasks }: CardTaskProps) {
	function handleCheckTask() {
		setTasks((state: Task[]) =>
			state.map((item: Task) =>
				item.id === task.id ? { ...item, checked: !item.checked } : item,
			),
		);
	}

	return (
		<div
			key={key}
			className={`${task.checked ? "border-[1px] border-base-gray-500" : "border-[1px] border-base-gray-400"} w-full bg-base-gray-500 rounded-lg flex items-center justify-between p-5`}
		>
			<div className="flex gap-5 items-start">
				<div>
					<Checkbox.Root
						onCheckedChange={handleCheckTask}
						className="check-radix bg-transparent border-2 border-blue-light w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
						defaultChecked={task.checked}
						id="c1"
					>
						<Checkbox.Indicator className="CheckboxIndicator">
							<CheckIcon className="" />
						</Checkbox.Indicator>
					</Checkbox.Root>
				</div>
				<span
					className={`${task.checked ? "line-through opacity-60" : ""} flex-wrap text-gray-100 text-[14px]`}
				>
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
			</button>
		</div>
	);
}
