import React from 'react'
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationItem as NavigationItem,
	StyledNavigationList as NavigationList,
} from 'baseui/header-navigation'
import {Button, KIND} from 'baseui/button'
import {Menu} from 'baseui/icon'
import {H4, Label1} from 'baseui/typography'

type NavbarProps = {
	onOpen: () => void
}

const Navbar = ({onOpen}: NavbarProps) => {
	return (
		<HeaderNavigation>
			<NavigationList $align={ALIGN.left}>
				<NavigationItem>
					<H4 margin={'-10px'}>Ubeetch</H4>
				</NavigationItem>
			</NavigationList>
			<NavigationList $align={ALIGN.center} />
			<NavigationList $align={ALIGN.right}>
				<NavigationItem>
					<Button kind={KIND.tertiary}>
						<a href='https://plecrx.io'>
							<Label1>Portfolio</Label1>
						</a>
					</Button>
				</NavigationItem>
			</NavigationList>
			<NavigationList $align={ALIGN.right}>
				<NavigationItem>
					<Button onClick={onOpen} kind={KIND.tertiary}>
						<Menu size={24} />
					</Button>
				</NavigationItem>
			</NavigationList>
		</HeaderNavigation>
	)
}

export default Navbar
