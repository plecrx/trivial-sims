import {Drawer} from 'baseui/drawer'
import React, {Fragment} from 'react'
import {Button, KIND} from 'baseui/button'
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox'

type MenuProps = {
	isOpen: boolean
	onClose: () => void
	isDark: boolean
	setTheme: () => void
}

const Menu = ({isOpen, isDark, onClose, setTheme}: MenuProps) => {
	return (
		<Fragment>
			<Drawer onClose={onClose} isOpen={isOpen} anchor={'right'}>
				<Button onClick={setTheme} kind={KIND.tertiary}>
					<Checkbox checked={isDark} checkmarkType={STYLE_TYPE.toggle_round} />
					Dark mode
				</Button>
			</Drawer>
		</Fragment>
	)
}

export default Menu
