import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	SlMenu,
	SlDiamond,
	SlBookOpen,
	SlAnchor,
	SlBubbles,
	SlChemistry,
	SlSettings,
	SlCompass,
} from 'react-icons/sl'
import {cn} from '@/lib/utils/mergeCss'
import {Title} from '@/components/headings'
import {Anchor, AnchorLabel} from '@/components/anchor/Anchor'
import {Container} from '../layout/Container'

function MobileMenu({children, className}) {
	return (
		<nav className={cn('text-inherit', className)}>
			<Sheet>
				<SheetTrigger>
					<SlMenu className="fill-white" />
				</SheetTrigger>
				<SheetContent className="pt-28 flex flex-col items-center">
					<SheetHeader className="">
						<Title className="text-zinc-600 text-2xl">Welcome </Title>
						<SheetDescription className="w-2/3 mx-auto">
							Thanks for taking the time to check out our to do list. In order to try the demo you
							will need to sign up for an account.
						</SheetDescription>
					</SheetHeader>
					<Container className="flex flex-col   gap-y-6 mt-10">
						<SheetClose asChild>
							<Anchor
								className="inline-flex items-center gap-x-2.5 hover:border-blue-500 group border-b border-b-white pb-1 "
								href="/demo">
								<SlChemistry className="fill-zinc-500 w-5 h-5 group-hover:fill-blue-500" />
								<AnchorLabel className="text-zinc-500 group-hover:text-blue-500">
									Try out the free demo?
								</AnchorLabel>
							</Anchor>
						</SheetClose>
						<SheetClose asChild>
							<Anchor
								className="inline-flex items-center gap-x-2.5 hover:border-blue-500 group border-b border-b-white pb-1 "
								href="/signup">
								<SlDiamond className="fill-zinc-500 w-5 h-5 group-hover:fill-blue-500" />
								<AnchorLabel className="text-zinc-500 group-hover:text-blue-500">
									Sign up for a free account?
								</AnchorLabel>
							</Anchor>
						</SheetClose>

						<SheetClose asChild>
							<Anchor
								className="inline-flex items-center gap-x-2.5 hover:border-blue-500 group border-b border-b-white pb-1 "
								href="/signin">
								<SlBubbles className="fill-zinc-500 w-5 h-5 group-hover:fill-blue-500" />
								<AnchorLabel className="text-zinc-500 group-hover:text-blue-500">
									Sign in to your account.
								</AnchorLabel>
							</Anchor>
						</SheetClose>

						<SheetClose asChild>
							<Anchor
								className="inline-flex items-center gap-x-2.5 hover:border-blue-500 group border-b border-b-white pb-1 "
								href="/">
								<SlBookOpen className="fill-zinc-500 w-5 h-5 group-hover:fill-blue-500" />
								<AnchorLabel className="text-zinc-500 group-hover:text-blue-500">
									Developer Documention.
								</AnchorLabel>
							</Anchor>
						</SheetClose>
						<SheetClose asChild>
							<Anchor
								className="inline-flex items-center gap-x-2.5 hover:border-blue-500 group border-b border-b-white pb-1 "
								href="/">
								<SlChemistry className="fill-zinc-500 w-5 h-5 group-hover:fill-blue-500" />
								<AnchorLabel className="text-zinc-500 group-hover:text-blue-500">
									Latest feature release.
								</AnchorLabel>
							</Anchor>
						</SheetClose>

						<SheetClose asChild>
							<Anchor
								className="inline-flex items-center gap-x-2.5 hover:border-blue-500 group border-b border-b-white pb-1 "
								href="/">
								<SlCompass className="fill-zinc-500 w-5 h-5 group-hover:fill-blue-500" />
								<AnchorLabel className="text-zinc-500 group-hover:text-blue-500">
									Community.
								</AnchorLabel>
							</Anchor>
						</SheetClose>
					</Container>
				</SheetContent>
			</Sheet>
		</nav>
	)
}

export {MobileMenu}
