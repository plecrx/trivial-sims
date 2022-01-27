import React, {Fragment} from "react";
import { Rides } from '../../components/Rides/Rides'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'
import { Display3 } from 'baseui/typography'
import { ArrowDown } from 'baseui/icon'
import styled from '@emotion/styled'

const Container = styled.div`
		
  margin: 0px;

`


type HomeProps = {
		isDark: boolean;
		setTheme: () => void
}

const Home = ({setTheme, isDark}: HomeProps) => {
	const [css, theme] = useStyletron();
	const [isOpen, setIsOpen] = React.useState(false);

	const close = () => {
		setIsOpen(false)
	}

	const open = () => {
		setIsOpen(true)
	}

	return (
		<Container>
			<Block className={css({ position: 'sticky', left: 0, top: 0 })}>
				<Navbar onOpen={open} setTheme={setTheme} isDark={isDark}/>
			</Block>
				<Block className={css({ fontSize: '20px', backgroundColor: theme.colors.backgroundSecondary, height: '100vh' })}>
					<Block className={css({ color: theme.colors.colorSecondary, backgroundColor: theme.colors.backgroundSecondary, padding: '2em 0em 3em 0em', display: 'flex', justifyContent: 'center'})}>
						<ArrowDown size={64} />
						<Display3>Choose a trip</Display3>
					</Block>
						<Rides />
				</Block >
			<Menu isOpen={isOpen} onClose={close}/>

		</Container>
	);
}

export default Home
