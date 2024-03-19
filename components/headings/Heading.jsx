import {cn} from '@/lib/utils/mergeCss'

function Heading({children, className, ...props}) {
	return (
		<header {...props} className={cn(' ', className)}>
			{children}
		</header>
	)
}

export default Heading
