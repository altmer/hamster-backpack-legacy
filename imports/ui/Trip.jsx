import React, { Component, PropTypes } from 'react'
import { Translate } from 'react-i18nify'

Trip = (props) => (
  <div className="container">
    <h1>{props.tripName}</h1>
  </div>
)

Trip.propTypes = {
  tripName: PropTypes.string.isRequired
}

export default Trip