import Link from 'next/link'
import {cn} from '@/lib/utils/mergeCss'
function TermsOfUse({children, className}) {
	return (
		<footer className={cn('', className)}>
			<h3 className="text-[11px] text-gray-500 font-medium">Terms of use.</h3>
			<p className="font-light text-gray-500 dark:text-gray-300 text-[10px]">
				The creaters reserves the right, at its sole discretion, to change, modify, add or remove portions of the
				<Link href="#" className=" text-blue-500 font-medium text-primary-600 dark:text-primary-500 hover:underline px-1">
					Privacy Policy
				</Link>{' '}
				at any time. It is the users responsibility to check the for changes in policy. Posting changes will mean that you accept and agree to the changes as long as you agree to the comply with these{' '}
				<Link href="#" className=" text-blue-500 font-medium text-primary-600 dark:text-primary-500 hover:underline px-1">
					Terms of Use
				</Link>
				we grant you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Site.
			</p>
		</footer>
	)
}
export default TermsOfUse
