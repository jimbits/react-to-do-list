import {cn} from '@/lib/utils/mergeCss'
 
export function Button({children, className}) {
	return <button className={cn('bg-zinc-100 border border-zinc-200  text-zinc-300 py-1 px-2 rounded-md', className)}>loading</button>
}
