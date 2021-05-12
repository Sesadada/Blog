import Navbar from './Navbar';
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import './App.css';
//run the json server with: npx json-server --watch data/db.json --port 8000 + npm start on another bash
function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/create'>
							<Create />
						</Route>
						<Route exact path='/blogs/:id'>
							<BlogDetails />
						</Route>
						<Route>
							<NotFound path='*' />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
