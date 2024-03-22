import {NavBar} from '@/components/navbar/NavBar'
import '@/css/globals.css'

export const metadata = {
	title: 'To Do List App',
	description: 'Best to do list of the year in DMIT',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>
				<NavBar className="bg-blue-100" />
				{children}
			</body>
		</html>
	)
}
