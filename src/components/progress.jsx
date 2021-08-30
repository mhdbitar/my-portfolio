import React from "react"
import PropTypes from "prop-types"
const Progress = ({ skill, percentage }) => {
  return (
    <div className="progress">
      {skill ? <strong className="progress--title">{skill}</strong> : null}
      <div className="progress--bar">
        <span
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
      <div className="progress--percentage">{`${percentage}%`}</div>
    </div>
  )
}


Progress.prototypes ={
  skill : PropTypes.string,
  percentage : PropTypes.number.isRequired
}
export default Progress
