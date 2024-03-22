import {cn} from '@/lib/utils/mergeCss'
import {AppBar, AppBarItem, AppBarItemGroup} from '../navigation'
import {MobileMenu} from '../menus/MobileMenu'
import {AnchorLabel, Anchor} from '../anchor/Anchor'
function NavBar({children, className}) {
	return (
		<AppBar className="flex justify-between py-3 px-4">
			<AppBarItem>
				<Anchor href="/">
					<AnchorLabel>Branding</AnchorLabel>
				</Anchor>
			</AppBarItem>

			<AppBarItemGroup className="inline-flex gap-3">
				<MobileMenu />
			</AppBarItemGroup>
		</AppBar>
	)
}

export {NavBar}
