import Link from 'next/link'
import {cn} from '@/lib/utils/mergeCss'

function SignInOption({children, className}) {
	return (
		<div className={cn(' text-center   text-gray-500 text-xs', className)}>
			<p>Already have an account?</p>
			<Link href="/signin" className="font-semibold  text-lg   leading-6 text-indigo-950 hover:text-indigo-500">
				Go to the sign in page.
			</Link>
		</div>
	)
}

export default SignInOption
