import '../src/assets/styles/styles.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { GiphyApp } from './pages/GiphyApp';
import { AppFooter } from './cmps/AppFooter';

function App() {
	return (
		<Router>
			<main className="app-container">
				<AppHeader />
				<Switch>
					<Route path="/" component={GiphyApp} />
					
				</Switch>
				<AppFooter></AppFooter>
			</main>
		</Router>
	);
}

export default App;
