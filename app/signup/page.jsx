import {ProviderButton, ProviderLabel} from '@/components/forms/ProviderButton'
import {Heading, Title} from '@/components/headings'
import {Container} from '@/components/layout/Container'
import {IoLogoGithub, IoLogoGoogle} from 'react-icons/io'
import {EmailAndPasswordForm, TermsOfUse, SignInOption} from '@/components/forms'
import {Button} from '@/components/buttons/Button'
import {Anchor, AnchorLabel} from '@/components/anchor/Anchor'

import {BrandLogo} from '@/components/brand'

async function SignUpPage({children}) {
	console.log('this is a server component')

	return (
		<>
			<main className="mt-24   ">
				<section className="max-w-lg py-10 mx-auto bg-white  rounded-md border border-zinc-300 px-8">
					<Heading className="mb-12 text-center">
						<BrandLogo className="w-10 h-10 inline fill-indigo-900" />
						<Title as="h2" className="text-2xl font-bold text-zinc-900">
							Account Sign Up
						</Title>
					</Heading>
					<Container className=" flex flex-col items-center gap-y-4">
						<ProviderButton className="rounded-lg flex w-3/4 px-16  items-center border border-zinc-300 py-2.5 gap-x-2.5 hover:bg-zinc-100">
							<IoLogoGoogle className="w-6 h-6" /> <ProviderLabel>Sign up with Google</ProviderLabel>
						</ProviderButton>
						<ProviderButton className="rounded-lg flex w-3/4 px-16  items-center border border-zinc-300   py-2.5 gap-x-2.5 hover:bg-zinc-100">
							<IoLogoGithub className="w-6 h-6" /> <ProviderLabel>Sign up with GitHub</ProviderLabel>
						</ProviderButton>
					</Container>
					<Container className="flex items-center justify-between mt-16 mb-10 gap-x-2">
						<div className="flex-1  h-0.5 bg-gray-200 dark:bg-gray-700"></div>
						<div className="flex-2 text-sm text-center text-gray-500  ">Sign up with email and password</div>
						<div className="flex-1 h-0.5 bg-gray-200  "></div>
					</Container>

					{/* <form className="space-y-8">
						<FormControl className="flex flex-col">
							<Label forHtml="email">Enter Email Address</Label>
							<Input type="text" id="email" name="email" placeholder="jane_doe@gmail.com" />
						</FormControl>

						<FormControl className="flex flex-col">
							<Label forHtml="password">Enter Strong Password</Label>
							<Input type="text" id="password" name="password" placeholder="ex: N45sd6md@pr" />
						</FormControl>
						<FormControl className="mt-12">
							<Button className="w-full bg-indigo-950">Create Free Account</Button>
						</FormControl>
					</form> */}
					<EmailAndPasswordForm />
					<SignInOption className="my-9" />
					<TermsOfUse className="" />
				</section>
			</main>
		</>
	)
}

export default SignUpPage
