'use server'

// formData  = formData object name/value pairs from the form
export async function addAction(formData) {
	const task = formData.get('task')
	const category = formData.get('category')
	console.log(task, category)
	// write a new task RTDB  firebase/api  addNewItem()
	// grab the key create
	// revalidate the page  revalidate('/')
	// message to the form.
	return 'message'
}
