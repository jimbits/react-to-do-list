'use server'
import {redirect} from 'next/navigation'

import {createUserWithEmailAndPassword} from 'firebase/auth'

import {auth} from '@/lib/firebase/firebaseInit'

async function signUpAction(formdata) {
	const email = formdata.get('email')
	const password = formdata.get('password')
	// firebase sdk issue...
	try {
		const userObj = await createNewUser(email, password)
		redirect('/demo')
	} catch (error) {
		console.log(error)
	}

	return null
}

export {signUpAction}

async function createNewUser(email, password) {
	return await createUserWithEmailAndPassword(auth, email, password)
}

// suspense error boundaries  storybook

//   function networkDelay(){
//    return new Promise(resolve=>{
// 		setTimeout(()=>{
// 		  let ans = [{
// 			uid: "6b27d025",
// 			product: "Product D",
// 			quantit: 5,
// 			price: 100,
// 			total: 500,
// 			salesPerson: "Mirha"
// 		}]
// 		 resolve(ans)
// 		}, 2000)
// 	 })
//   }

//   Next.js server component access to the NODE.js environemnt
//   Backend programming NEXT.js directly in next.js Window Object Not a browser OS

//   const thing = new Promise ((resolve, reject)=>{
// 	// slow processs
// 	  true ? resolve(12)  : reject("oops")
//   })

//   thing.then(x).catch(y)

// try {
// 	  await thing()
// } catch (error) {
// 	  reject()
// }

/* 
             REDIRECT NOT WORKING
			  PROMISE LIKE   
createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// user credentials that it  created uid..., username, photo, phonenubmer, validated
			const user = userCredential.user
			console.log(user)
			// on success rediret to the /demo
			// next/navigation/redirect
		 
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message

			console.log(errorCode, errorMessage)
		})
*/

/* 
        NEXT.js Server Action (PHP NOT!)
        The page doesn't reload.......????
        fn() must be async client - server - client
                            form -  serverAction - redirect on success

        1. Call the firebase createuser(auth, email, password)

        2. Sign In   signInwith(auth, email, password)
           Google, GitHub sign up providers (video...)

        3. Demo Page
           Protected Route only authenticated users get access. (video)
*/
