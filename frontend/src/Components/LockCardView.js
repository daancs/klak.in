import React from 'react';
import PropTypes from 'prop-types';


const LockCardView = ({ openDoor, doorID, name }) => {
    return (
        <div id={doorID} className="lockCard clickable" onClick={openDoor}>
            <div className="lockCardHeader">
                <span>{name}</span>
            </div>
            <div className="lockCardBody">
                <span>Click here to open</span>
            </div>
        </div>
    )
}



LockCardView.propTypes = {
    openDoor: PropTypes.func.isRequired,
    doorID: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

export default LockCardView

