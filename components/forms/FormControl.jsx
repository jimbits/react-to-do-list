import {cn} from '@/lib/utils/mergeCss'

/* 
      Layout Container For Form Control
      emil, password
      file upload
*/
function FormControl({children, className}) {
	return <div className={cn('', className)}>{children}</div>
}
export default FormControl
