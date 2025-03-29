import { useState, useEffect } from "react";
import { FormTask } from "./components/FormTask";
import { CardTask } from "./components/CardTask";
import clipboard from "../../assets/clipboard.svg";

export interface Task {
	id: number;
	content: string;
	checked: boolean;
}

export function Main() {
	const [tasks, setTasks] = useState<Task[]>(() => {
		const savedTasks = localStorage.getItem("@todolistrocketseat:tasks-1.0.0");
		return savedTasks ? JSON.parse(savedTasks) : [];
	});

	useEffect(() => {
		localStorage.setItem(
			"@todolistrocketseat:tasks-1.0.0",
			JSON.stringify(tasks),
		);
	}, [tasks]);

	function deleteTask(taskId: number) {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	}

	const numberOfTasks = tasks.length;
	const numberOfCompletedTasks = tasks.filter((task) => task.checked).length;

	return (
		<main className="h-[calc(100%-13rem)] bg-base-gray-600 flex justify-center relative">
			<div className="max-w-3xl w-full margin-auto px-5">
				<div className="-mt-7">
					<FormTask setTasks={setTasks} />
				</div>
				<div className="mt-20 space-y-[24px]">
					<div className="flex justify-between w-full items-center">
						<div className="flex items-center gap-1.5">
							<p className="font-bold text-blue-light">Tarefas criadas</p>
							<div className="rounded-[100%] bg-base-gray-400 px-3">
								<span>{numberOfTasks}</span>
							</div>
						</div>
						<div className="flex gap-1.5">
							<p className="font-bold text-purple-light">Concluídas</p>
							<div className="rounded-4xl bg-base-gray-400 px-3">
								<span>
									{numberOfCompletedTasks >= 1
										? `${numberOfCompletedTasks} de ${numberOfTasks}`
										: 0}
								</span>
							</div>
						</div>
					</div>
					<div className="h-px w-full bg-base-gray-400">{}</div>
					<div className="space-y-3 overflow-y-auto">
						{tasks.length > 0 ? (
							[...tasks]
								.sort((a, b) => Number(a.checked) - Number(b.checked))
								.map((task) => (
									<CardTask
										deleteTask={deleteTask}
										key={task.id}
										task={task}
										setTasks={setTasks}
									/>
								))
						) : (
							<div className="flex items-center flex-col mt-5 gap-5">
								<img src={clipboard} alt="" />
								<div className="flex flex-col">
									<span className="font-bold text-base-gray-300 text-lg text-center">
										Você ainda não tem tarefas cadastradas
									</span>
									<span className="font-normal text-base-gray-300 text-lg text-center">
										Crie tarefas e organize seus itens a fazer
									</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
