import {cn} from '@/lib/utils/mergeCss'

function H1(children, className, props) {
	return (
		<h1 {...props} className={cn('', className)}>
			{children}
		</h1>
	)
}

function H2(children, className, props) {
	return (
		<h2 {...props} className={cn('', className)}>
			{children}
		</h2>
	)
}

function H3(children, className, props) {
	return (
		<h3 {...props} className={cn('', className)}>
			{children}
		</h3>
	)
}

function H4(children, className, props) {
	return (
		<h4 {...props} className={cn('', className)}>
			{children}
		</h4>
	)
}

function H5(children, className, props) {
	return (
		<h5 {...props} className={cn('', className)}>
			{children}
		</h5>
	)
}

function H6(children, className, props) {
	return (
		<h6 {...props} className={cn('', className)}>
			{children}
		</h6>
	)
}

export default function Title({children, as, className, ...props}) {
	switch (as) {
		case 'h1':
			return H1(children, className, props)

		case 'h2':
			return H2(children, className, props)

		case 'h3':
			return H3(children, className, props)

		case 'h4':
			return H4(children, className, props)

		case 'h5':
			return H5(children, className, props)

		case 'h6':
			return H6(children, className, props)

		default:
			return H2(children, className, props)
	}
}
