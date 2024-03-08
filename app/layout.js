import {Advent_Pro} from 'next/font/google'

import '@/css/globals.css'

// Different Styles of Fonts
const headingFont = Advent_Pro({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	title: 'Starter Kit',
	description: 'starter kit for next.js applications',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
