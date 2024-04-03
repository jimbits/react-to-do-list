import {cn} from '@/lib/utils/mergeCss'

function ToDoList({children, className}) {
	return <section className={cn('bg-white p-3 border min-h-[460px]', className)}>{children}</section>
}

export {ToDoList}
