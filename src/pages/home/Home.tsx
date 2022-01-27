import * as React from "react";
import { Button } from "baseui/button";
import { Drawer } from "baseui/drawer";
import { Rides } from '../../components/Rides/Rides'
import Menu from '../../components/Menu/Menu'

const Home = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const close = () => {
		setIsOpen(false)
	}

	return (
		<React.Fragment>
				<Button onClick={() => setIsOpen(!isOpen)}>Open Drawer on left</Button>
				<Rides/>
				<Menu isOpen={isOpen} onClose={close}/>
		</React.Fragment>
	);
}

export default Home
