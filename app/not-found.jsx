function NotFoundPage({children}) {
	return (
		<>
			<header className="text-center pt-28">
				<h2 className="text-5xl text-slate-900">Not Found Page Component </h2>
			</header>
			<main className=" min-h-screen py-24">{children}</main>
		</>
	)
}

export default NotFoundPage
