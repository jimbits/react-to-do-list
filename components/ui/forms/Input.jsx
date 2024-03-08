import {cn} from '@/lib/utils/mergeCss'
/* 
     fn(data, elm){

     }

*/
function Input({className, ...props}) {
	console.log(props)
	return (
		<input
			{...props}
			className={cn(
				'rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
				className
			)}
		/>
	)
}
export default Input
