import {ProviderButton, ProviderLabel} from '@/components/forms/ProviderButton'
import {Heading, Title} from '@/components/headings'
import {Container} from '@/components/layout/Container'
import {IoLogoGithub, IoLogoGoogle} from 'react-icons/io'
import {FormControl, Label, Input} from '@/components/forms'
import {Button} from '@/components/buttons/Button'
function SignUpPage({children}) {
	return (
		<>
			<main className="mt-24 py-36 bg-zinc-100">
				<section className="max-w-lg py-24 mx-auto bg-white  rounded-md border border-zinc-300 px-8">
					<Heading className="mb-12">
						<Title as="h2" className="text-2xl font-semibold text-zinc-700">
							Create an Account
						</Title>
					</Heading>
					<Container className="flex gap-x-4">
						<ProviderButton className="rounded-lg flex justify-center items-center border border-zinc-300 w-full py-2.5 gap-x-2.5">
							<IoLogoGoogle className="w-6 h-6" /> <ProviderLabel>Google</ProviderLabel>
						</ProviderButton>
						<ProviderButton className="rounded-lg flex justify-center items-center border border-zinc-300 w-full py-2.5 gap-x-2.5">
							<IoLogoGithub className="w-6 h-6" /> <ProviderLabel>GitHub</ProviderLabel>
						</ProviderButton>
					</Container>
					<Container className="flex items-center my-12">
						<div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
						<div className="px-7 text-center text-gray-500 dark:text-gray-400">or</div>
						<div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
					</Container>

					<form className="space-y-8">
						<FormControl className="flex flex-col">
							<Label forHtml="email">Enter Email Address</Label>
							<Input type="text" id="email" name="email" placeholder="jane_doe@gmail.com" />
						</FormControl>

						<FormControl className="flex flex-col">
							<Label forHtml="password">Enter Strong Password</Label>
							<Input type="text" id="password" name="password" placeholder="ex: N45sd6md@pr" />
						</FormControl>
						<FormControl className="mt-12">
							<Button className="w-full">Create Your Account</Button>
						</FormControl>
					</form>
				</section>
			</main>
		</>
	)
}

export default SignUpPage
