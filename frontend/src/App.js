import React from 'react'
import './App.css'
import RequestHOC from './HOC/Request'
import { validateToken } from './helpers/TokenValidator'
//import OpenDoorView from './Components/OpenDoorView'
import LoaderView from './Components/LoaderView.jsx'
import ResultView from './Components/ResultView.jsx'
import LockCardView from './Components/LockCardView.jsx'
// import doors.json as jsonfile
import doors from './doors.json'

function App() {

	let jsonparse = JSON.parse(JSON.stringify(doors));
	
	let map = new Map();
	jsonparse.doors.forEach(door => {
		map.set(door.doorID, door.name);
	});

	const [token, setToken] = React.useState("");

	if (/*!(validateToken(token))*/false) { // If you want authentication, change to !validateToken
		return (
			<div className="login">
				<h1>Authentication needed</h1>
				<span>(<a href='mailto:info@klak.in'>contact me</a> if you do not know the password)</span>
				<br></br>
				<input type="text" placeholder="Enter token" onChange={(e) => setToken(e.target.value)} />
			</div>
		);
	} else {
		return (
			<div className="divide">
				<div className="cover-all">
					<RequestHOC>
						{(openDoor, loading, res) => {
							if (res !== undefined) {
								return <ResultView res={res} />
							} else if (loading) {
								return <LoaderView />
							}
							return Array.from(map).map(([id, name]) => {
								return <LockCardView key={id} openDoor={openDoor} doorID={id} name={name} />
							})
						}
						}
					</RequestHOC>
				</div>
			</div>
		)
	}
}

export default App
