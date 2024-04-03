import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'

import {cn} from '@/lib/utils/mergeCss'

function AddTask({children, className}) {
	return (
		<Dialog>
			<DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">Add New</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add New Task</DialogTitle>
					<DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export {AddTask}
