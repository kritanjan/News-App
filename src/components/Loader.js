import React, { Component } from 'react'
import loader from './loadingGif.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='text-center' style={{gridArea: "1/2/span 1/span 1"}}>
        <img src={loader} alt="Loading Data, Please wait" />
      </div>
    )
  }
}

export default Loader