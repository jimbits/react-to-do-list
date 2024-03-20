function DemoPage({children}) {
	return (
		<>
			<header className="text-center pt-28">
				<h2 className="text-5xl text-slate-900">Demo Page Component </h2>
			</header>
			<main className=" min-h-screen py-24">{children}</main>
		</>
	)
}

export default DemoPage
