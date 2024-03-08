/* 
         Default All NEXT.js Components are Server Components.....  

		 Client Component specifigy client components

         imports 

		 framework first

		 library second

		 dev components 

		 styles

*/

import {ref, get} from 'firebase/database'

import {db} from '@/lib/firebase/firebaseInit'
import {Label, FormControl, Input} from '@/components/ui/forms'
import {Button} from '@/components/ui/buttons/Button'
// NoSQL sql ......
async function getFirebaseData() {
	const dbRef = ref(db, 'todos')
	const snapshot = await get(dbRef)
	return await snapshot.val()
}

// aync wrapper around Promise API   .then.then
export default async function Home() {
	//const data = await getFirebaseData()
	// server component running on the server
	// dev server its the NODE.js runtime on your
	// machine

	return (
		<main className="my-24">
			<form className=" max-w-md mx-auto space-y-4">
				<FormControl className="  flex flex-col">
					<Label>Enter Your Email Address</Label>
					<Input placeholder="jane_doe@gmail.com" id="email" type="email" />
				</FormControl>

				<FormControl className="  flex flex-col">
					<Label>Password</Label>
					<Input placeholder="ex: Esasowo4odq2" id="email" />
				</FormControl>

				<FormControl className="flex justify-center gap-x-4">
					<Button className="border border-indigo-500 bg-transparent text-indigo-500 ">Reset</Button>
					<Button className=" ">Create Your Account</Button>
				</FormControl>
			</form>
		</main>
	)
}
