import React from 'react'
import propTypes from 'prop-types'
const Profile = (props) => {
    const HundleName=(FullName)=>[alert(`mynameis${props.FullName}`)]
  return (
    <div>
        <h1> Ladies and gentlemen this is my profile</h1>
        <h2>
            {props.FullName}
            <h3> {props.Bio}</h3>
            <h4>{props.Profession}</h4>
            <h5>{props.age}</h5>
        </h2>
        {props.children}
        <button onClick={HundleName}>click me </button>
    </div>
  )
}

export default Profile
Profile.defaultProps={Bio:"Student web devloper"}
Profile.propTypes={age:propTypes.string}