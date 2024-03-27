'use server'

/* 
        server actions 
        fn() must be async
*/

async function signUpAction(formdata) {
	console.log(formdata.get('email'))
	console.log(formdata.get('password'))
	return null
}

/* 
       Task to take the email and password name value pairs
       <input id="clientjs" name="server"/>
       user firebase auth to sign in the user.
*/
export {signUpAction}
