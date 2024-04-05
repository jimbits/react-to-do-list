'use client'
import {cn} from '@/lib/utils/mergeCss'
import {addAction} from '@/actions/addTaskAction'
import {FormControl, Input, Label} from '.'

function AddTaskFrom({children, className}) {
	console.log('Form')
	return (
		<form action={addAction} className={cn('space-y-5  bg-white max-w-md mx-auto py-8 px-4', className)}>
			<FormControl className="flex flex-col">
				<Label htmlFor="category">Category</Label>
				<Input id="category" name="category" placeholder="enter the task category" />
			</FormControl>

			<FormControl className="flex flex-col">
				<Label htmlFor="task">Task</Label>
				<Input id="task" name="task" placeholder="enter a new task" />
			</FormControl>
			<FormControl className="pt-3">
				<button className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">Add New Task</button>
			</FormControl>
		</form>
	)
}

export {AddTaskFrom}
