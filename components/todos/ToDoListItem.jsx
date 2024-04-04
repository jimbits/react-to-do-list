import {cn} from '@/lib/utils/mergeCss'

function ToDoListItem({children, className, uid}) {
	return (
		<aside className={cn('odd:bg-neutral-50 even:bg-gray-100 flex justify-between   py-4 px-3 rounded', className)}>
			<div>
				<p className="text-xs text-neutral-400">Category</p>
				<p className="text-sm text-neutral-600">To Do Item</p>
			</div>
			<div className="flex flex-col gap-y-1 text-[10px] items-center">
				<button className="border border-neutral-500 text-neutral-600 px-2 py-0.5 rounded">Delete</button>
				<button className="bg-neutral-500 text-white px-2 py-0.5 rounded w-full">Edit</button>
			</div>
		</aside>
	)
}

export {ToDoListItem}
