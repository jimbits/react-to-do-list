import {cn} from '@/lib/utils/mergeCss'

function Brand({children, className}) {
	return <div className={cn('text-inherit', className)}>{children}</div>
}

export default Brand
