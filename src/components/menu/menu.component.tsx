import {Drawer} from 'baseui/drawer'
import React, {Fragment, useState} from 'react'
import {Button, KIND} from 'baseui/button'
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox'
import {Navigation} from 'baseui/side-navigation'
import {useRouter} from 'next/router'
import {menuItems} from '../../utils/data'
import {MenuProps} from './menu.types'

const Menu = ({isOpen, isDark, onClose, setTheme}: MenuProps) => {
	const router = useRouter()
	const [location, setLocation] = useState(router.pathname)
	return (
		<Fragment>
			<Drawer
				onClose={onClose}
				isOpen={isOpen}
				anchor={'right'}
				overrides={{
					DrawerBody: {
						style: () => ({
							zIndex: 1000,
							position: 'absolute',
						}),
					},
				}}
			>
				<Navigation
					items={menuItems}
					activeItemId={location}
					onChange={({item}) => setLocation(item.itemId)}
					overrides={{
						NavItem: {
							style: ({$active, $theme}) => {
								if (!$active)
									return {
										':hover': {
											color: $theme.colors.warning400,
										},
									}
								return {
									backgroundColor: 'transparent',
									borderLeftColor: $theme.colors.warning400,
									color: $theme.colors.warning400,
									':hover': {
										color: $theme.colors.warning400,
									},
								}
							},
						},
					}}
				/>
				<Button onClick={setTheme} kind={KIND.tertiary}>
					<Checkbox checked={isDark} checkmarkType={STYLE_TYPE.toggle_round} />
					Dark mode
				</Button>
			</Drawer>
		</Fragment>
	)
}

export default Menu
