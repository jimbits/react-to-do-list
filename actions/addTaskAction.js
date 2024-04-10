'use server'
import {revalidatePath} from 'next/cache'

import {ref, set, push} from 'firebase/database'

import {db} from '@/lib/firebase/firebaseInit'
// formData  = formData object name/value pairs from the form
export async function addAction(prevState, formData) {
	const todo = formData.get('task')
	const category = formData.get('category')
	const newTask = {
		todo,
		category,
	}
	const response = await addTask(newTask)
	// write a new task RTDB  firebase/api  addNewItem()
	// grab the key create
	// revalidate the page  revalidate('/')
	// message to the form.
	revalidatePath('/demo')
	return {message: response}
}

// Firebase NoSql SQL ....
async function addTask(task) {
	const rootPath = ref(db)
	// using keys at the unique item
	// create a new unique firebasr RTDB key
	const key = push(rootPath).key
	const path = `todos/${key}`

	//  set method of the database sdk
	// emulator suit for testing running on your machine.
	// set return a call back  undefined success
	// error if things go wrong
	// send back a response for success or for failure

	// write data wait for callback
	// write fn()  what is the callback method
	//  db =============> success or failure
	try {
		await set(ref(db, path), task)
		return 'success'
	} catch (error) {
		return 'failure'
		console.log('error')
	}
}
