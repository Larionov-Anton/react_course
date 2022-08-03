
import {Route, Routes} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { ProductPages } from './pages/ProductPage';
import { Navigation } from './components/Navigation'

function  App() {
	return (
		
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={ <ProductPages /> } />
				<Route path='/about' element={ <AboutPage /> } />
			</Routes>
		</>

	)
}

export default App;