import {cn} from '@/lib/utils/mergeCss'
import {AppBar, AppBarItem, AppBarItemGroup} from '../navigation'

import {AnchorLabel, Anchor} from '../anchor/Anchor'
function NavBar({children, className}) {
	return (
		<AppBar className="flex justify-between py-3 px-4">
			<AppBarItem className="text-red-500">
				<Anchor href="/">
					<AnchorLabel>branding</AnchorLabel>
				</Anchor>
			</AppBarItem>
			<AppBarItemGroup>
				<Anchor href="demo">
					<AnchorLabel> demo page </AnchorLabel>
				</Anchor>
				<Anchor href="signin">
					<AnchorLabel> sign in page </AnchorLabel>
				</Anchor>
				<Anchor href="signup">
					<AnchorLabel> sign up page </AnchorLabel>
				</Anchor>
			</AppBarItemGroup>
			<AppBarItemGroup className="inline-flex gap-3">
				<AppBarItem>github</AppBarItem>
				<AppBarItem>vercel</AppBarItem>
			</AppBarItemGroup>
		</AppBar>
	)
}

export {NavBar}
