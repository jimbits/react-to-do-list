import {cn} from '@/lib/utils/mergeCss'
import {AppBar, AppBarItem, AppBarItemGroup} from '../navigation'
import {MobileMenu} from '../menus/MobileMenu'
import {AnchorLabel, Anchor} from '../anchor/Anchor'
import {Brand, BrandLogo, BrandName} from '@/components/brand'
function NavBar({children, className}) {
	return (
		<AppBar className={cn('flex justify-between items-center py-3 px-4 bg-black', className)}>
			<AppBarItem>
				<Anchor href="/">
					<Brand className="flex gap-x-2 items-center">
						<BrandLogo className=" w-7 h-7 fill-white" />
						<BrandName className="text-white font-light text-sm">todoify</BrandName>
					</Brand>
				</Anchor>
			</AppBarItem>

			<AppBarItemGroup className="inline-flex gap-3">
				<MobileMenu />
			</AppBarItemGroup>
		</AppBar>
	)
}

export {NavBar}
