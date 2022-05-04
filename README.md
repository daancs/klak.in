# Opens the door to Chabo

To try it out, please use the [klak.in](https://klak.in). Please don't spread too much, aptus might know their shit and I don't want to get in trouble for excessive use.
<br>
The main application can be visited at [klak.in](https://klak.in) and the api can be found at [api.klak.in](https://api.klak.in)
<br>
This will work with other CSB doors as well. Right now it is hard coded for the B door (if you use the example down below) but the production build has ability to open both doors.
<br>

### Use the script for opening the door:

- Provide the following environment variables: 
  - `CSB_URL=https://www.chalmersstudentbostader.se`
  - `APTUS_URL=https://apt-www.chalmersstudentbostader.se`
  - `LOG=<your personal number>`, 
  - `PASSWORD=<your password to CSB>`
- Run `CSB_URL=https://www.chalmersstudentbostader.se APTUS_URL=https://apt-www.chalmersstudentbostader.se LOG=<your password to CSB> PASSWORD=<your password to CSB> node -e "require('alohomora/src/services/unlock.service.js').unlockDoor()"`

## Frontend

The frontend application uses React and can be found in frontend/.

## Planned features
- ~~Open both 7A and 7B~~
- ~~Authentication needed to open door(s)~~
  - This is just essentially so that only "trusted" persons can open the doors. Have been getting complaints that it is unsafe (which is true) so I figured making a simple password to access the opening function should work just fine.
