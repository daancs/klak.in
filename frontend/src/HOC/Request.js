import { Component } from 'react'
import { openDoor } from '../helpers/OpenDoor'
import { PropTypes } from 'prop-types'

export default class RequestHOC extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }
  state = {
    loading: false,
  }
  _openDoor = async (doorID) => {
    this.setState({ loading: true })
    const res = await openDoor(doorID)
    this.setState({ loading: false, res })
  }

  render() {
    const { loading, res } = this.state
    return this.props.children(this._openDoor, loading, res)
  }
}
