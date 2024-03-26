import {cn} from '@/lib/utils/mergeCss'

function BrandName({children, className}) {
	return <h2 className={cn('text-inherit', className)}>{children}</h2>
}

export default BrandName
