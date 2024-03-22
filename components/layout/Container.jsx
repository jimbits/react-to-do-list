import {cn} from '@/lib/utils/mergeCss'

function Container({children, className}) {
	return <div className={cn('text-inherit', className)}>{children}</div>
}

export {Container}
