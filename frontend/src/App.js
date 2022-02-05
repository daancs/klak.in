import React from 'react'
import './App.css'
import RequestHOC from './HOC/Request'
//import OpenDoorView from './Components/OpenDoorView'
import LoaderView from './Components/LoaderView'
import ResultView from './Components/ResultView'
<<<<<<< HEAD
import AboutMeView from './Components/AboutMeView'
import LockCardView from './Components/LockCardView'
// import doors.json as jsonfile
import doors from './doors.json'

function App() {

  let chaboDoors = JSON.parse(JSON.stringify(doors));
  console.log(chaboDoors);

  let map = new Map();
  map.set(116400, "Kemivägen 7B");
  map.set(116402, "Kemivägen 7A");

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
            return Array.from(chaboDoors).map(([doorID, name]) => (
              <LockCardView key={doorID} openDoor={openDoor} doorID={doorID} name={name} />
            ))
            /*return Array.from(map).map(([id, name]) => {
              return <LockCardView key={id} openDoor={openDoor} doorID={id} name={name} />
            })*/
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
=======

function App() {
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
						return <OpenDoorView openDoor={openDoor} />
					}}
				</RequestHOC>
			</div>
			{/*<div className="about-me">
        <AboutMeView />
      </div>*/}
		</div>
	)
>>>>>>> master
}

export default App
