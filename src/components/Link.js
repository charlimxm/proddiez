import React from 'react'

const Link = ({link}) => {
  const _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }

  return (
    <div className="col s12 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{ link.description }</span>
          <p>({ link.url })</p>
        </div>
      </div>
    </div>
  )
}

export default Link
