import * as React from "react";
import { Button } from "baseui/button";
import { Drawer } from "baseui/drawer";

const Home = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	function close() {
		setIsOpen(false);
	}

	return (
		<React.Fragment>
			<React.Fragment>
				<Button onClick={() => setIsOpen(!isOpen)}>Open Drawer on left</Button>
				<Drawer onClose={() => close()} isOpen={isOpen} anchor={"left"}>
					Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
					faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
				</Drawer>
			</React.Fragment>
		</React.Fragment>
	);
}

export default Home
