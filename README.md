# Opens the door to Chabo

To try it out, please use the [klak.in](https://klak.in). Aptus might know their shit and since it uses my credentials and I dont want to get in trouble with CSB for excessive use hehe
<br>
The main application can be visited at [klak.in](https://klak.in) and the api can be found at [api.klak.in](https://api.klak.in)
<br>
This will work with other CSB doors as well. Right now it is hard coded for the B door but in the future it is planned to be able to choose what door you want to open.
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

