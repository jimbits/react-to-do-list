import {cn} from '@/lib/utils/mergeCss'

function Tagline({children, className, props}) {
	return (
		<p {...props} className={cn('text-inherit', className)}>
			{children}
		</p>
	)
}

export default Tagline
