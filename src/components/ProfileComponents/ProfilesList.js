import React from "react"

function ProfilesList(props) {
  function edit(name) {
    props.setSelectedProfile(name);
    props.setNewProfile(props.profileData.find(x => x.name === name))
  }

  return (
    <div className="component">
      <h3>Your Profiles</h3>
      {props.profileData.map(item =>
        <div key={item.name}>
          <p>
            {item.name}
            <button className="icon-button" onClick={() => props.setSelectedProfile(item.name)}><i className="fas fa-eye"></i></button>
            <button className="icon-button" onClick={() => edit(item.name)}><i className="fas fa-edit"></i></button>
          </p>
        </div>
      )}
    </div>
  )
}

export default ProfilesList
