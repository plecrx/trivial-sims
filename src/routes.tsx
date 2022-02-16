import {Route, MakeGenerics} from 'react-location'
import {Home} from './pages/home'
import {Immo} from './pages/immo'
import {Freelance} from './pages/freelance'

export type LocationGenerics = MakeGenerics<{}>

export const routes: Route<LocationGenerics>[] = [
	{path: '/', element: <Home />},
	{path: '/immo', element: <Immo />},
	{path: '/freelance', element: <Freelance />},
]
