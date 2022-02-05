import React from 'react'
import './App.css'
import RequestHOC from './HOC/Request'
//import OpenDoorView from './Components/OpenDoorView'
import LoaderView from './Components/LoaderView'
import ResultView from './Components/ResultView'
import AboutMeView from './Components/AboutMeView'
import LockCardView from './Components/LockCardView'
// import doors.json as jsonfile
import doors from './doors.json'

function App() {

	let jsonparse = JSON.parse(JSON.stringify(doors));
	
	let map = new Map();
	jsonparse.doors.forEach(door => {
		map.set(door.doorID, door.name);
	});

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
						/*return Array.from(chaboDoors).map(([doorID, name]) => (
						  <LockCardView key={doorID} openDoor={openDoor} doorID={doorID} name={name} />
						))*/
						return Array.from(map).map(([id, name]) => {
							return <LockCardView key={id} openDoor={openDoor} doorID={id} name={name} />
						})
						//return <LockCardView openDoor={openDoor, 116400} /> //<OpenDoorView openDoor={openDoor} />
					}
					}
				</RequestHOC>
			</div>
			<div className="about-me">
				<AboutMeView />
			</div>
		</div>

	)
}

export default App
