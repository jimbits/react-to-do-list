import {cn} from '@/lib/utils/mergeCss'

function ToDoList({children, className}) {
	return <section className={cn('bg-white', className)}>{children}</section>
}

export {ToDoList}
