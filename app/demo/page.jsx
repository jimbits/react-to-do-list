import {ToDoList} from '@/components/todos/ToDoList'
import {AddTask} from '@/components/dialogs/AddTask'
import {ToDoListItem} from '@/components/todos/ToDoListItem'
function DemoPage({children}) {
	return (
		<>
			<header className="text-center pt-28">
				<h2 className="text-5xl text-slate-900">Demo Page Component </h2>
			</header>
			<main className=" max-w-md mx-auto  py-24">
				<ToDoList>
					<ToDoListItem>to do item here</ToDoListItem>
				</ToDoList>
				<AddTask />
			</main>
		</>
	)
}

export default DemoPage
