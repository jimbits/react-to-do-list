import {cn} from '@/lib/utils/mergeCss'

function ProviderButton({children, icon, className}) {
	return (
		<button className={cn('text-inherit', className)}>
			{icon}
			{children}
		</button>
	)
}

function ProviderLabel({children, className}) {
	return <span className={cn('text-inherit', className)}>{children}</span>
}

export {ProviderButton, ProviderLabel}
