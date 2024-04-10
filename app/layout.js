import {Toaster} from '@/components/ui/sonner'

import {NavBar} from '@/components/navbar/NavBar'

import '@/css/globals.css'

export const metadata = {
	title: 'To Do List App',
	description: 'Best to do list of the year in DMIT',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<link rel="icon" href="/svg/favicon.svg" type="image/svg+xml" />
			<body className="bg-gray-200">
				<NavBar />
				{children}
				<Toaster
					position="top-center"
					visibleToasts={1}
					toastOptions={{
						unstyled: true,
					}}
				/>
			</body>
		</html>
	)
}
