import {cn} from '@/lib/utils/mergeCss'
/* 
     fn(data, elm){

     }

*/
function Input({className, ...props}) {
	return <input {...props} className={cn('  bg-zinc-50 border   text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5', className)} />
}
export default Input
