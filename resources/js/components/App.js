import React, { Component  } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import ComplaintIndex from './ComplaintIndex'
import ComplaintCreate from './ComplaintCreate'
import ComplaintShow from './ComplaintShow'
import ComplaintDetail from './ComplaintDetail'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="page-container">
					<div className="page-sidebar">
						<ul className="x-navigation">
							<li className="xn-logo">
								<Link to="/"><img alt="road-gis" src={window.location.origin + '/icon/dbm.png'} width="20px" height="20px" /> RoadGIS</Link>
								<Link to="" className="x-navigation-control"></Link>
							</li>
							<li className="xn-title">Menu Utama</li>
							<li><Link to="/"><span className="glyphicon glyphicon-home"></span>Home</Link></li>
							<li><Link to="/create"><span className="glyphicon glyphicon-plus"></span>Create Complaint</Link></li>
							<li><Link to="/show"><span className="glyphicon glyphicon-th-list"></span>Show Complaints</Link></li>
						</ul>
					</div>

					<Switch>
						<Route exact path="/" component={ComplaintIndex} />
						<Route path="/create" component={ComplaintCreate} />
						
						<Route exact path="/show" component={ComplaintShow} />
						<Route path="/show/:id_lapor" component={ComplaintDetail} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));