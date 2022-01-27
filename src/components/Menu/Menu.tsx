import { Drawer } from 'baseui/drawer'
import React, {Fragment} from 'react'

type MenuProps = {
	isOpen: boolean;
	onClose: () => void
}

const Menu = ({isOpen, onClose}: MenuProps) => {
	return (
		<Fragment>
			<Drawer onClose={onClose} isOpen={isOpen} anchor={"right"}>
				Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
				faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
			</Drawer>
		</Fragment>
	)
}

export default Menu
