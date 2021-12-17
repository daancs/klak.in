import React from 'react';
import PropTypes from 'prop-types';


const LockCardView = ( {openDoor, doorID}) => {

    <div class="lockCard clickable" onClick={openDoor}>
            <div class="lockCardHeader">
                
                <span></span>
            </div>
    </div>

}



LockCardView.propTypes = {
    openDoor: PropTypes.func.isRequired,
    doorID: PropTypes.number.isRequired,
  }

export default LockCardView

