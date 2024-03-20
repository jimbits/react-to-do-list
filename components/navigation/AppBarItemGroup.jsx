import {cn} from '@/lib/utils/mergeCss'

function AppBarItemGroup({children, className}) {
	return <div className={cn('text-inherit', className)}>{children}</div>
}

export default AppBarItemGroup
