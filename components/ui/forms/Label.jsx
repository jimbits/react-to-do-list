import {cn} from '@/lib/utils/mergeCss'

function Label({children, className}) {
	return <label className={cn('text-sm font-medium text-zinc-700 p-0 m-0', className)}>{children}</label>
}

export default Label
