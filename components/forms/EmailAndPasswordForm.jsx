'use client'

import {cn} from '@/lib/utils/mergeCss'
import {FormControl, Label, Input} from '.'
import {Button} from '../buttons/Button'
import {signUpAction} from '@/actions/signUpAction'
function EmailAndPasswordForm({children, className}) {
	return (
		<form action={signUpAction} className={(cn('space-y-8'), className)}>
			<FormControl className="flex flex-col">
				<Label htmlFor="email">Enter Email Address</Label>
				<Input type="text" id="email" name="email" placeholder="jane_doe@gmail.com" />
			</FormControl>

			<FormControl className="flex flex-col">
				<Label htmlFor="password">Enter Strong Password</Label>
				<Input type="text" id="password" name="password" placeholder="ex: N45sd6md@pr" />
			</FormControl>
			<FormControl className="mt-12">
				<Button className="w-full bg-indigo-950">Create Free Account</Button>
			</FormControl>
		</form>
	)
}

export default EmailAndPasswordForm
