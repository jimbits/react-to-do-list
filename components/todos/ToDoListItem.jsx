import {cn} from '@/lib/utils/mergeCss'

function ToDoListItem({children, className}) {
	return <aside className={cn('bg-neutral-100 flex justify-between border border-black py-2.5 px-3', className)}>{children}</aside>
}

export {ToDoListItem}
