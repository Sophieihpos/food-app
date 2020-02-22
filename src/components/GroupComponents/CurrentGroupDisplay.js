import React from "react"

function CurrentGroupDisplay(props) {
  function displayGroupMembers(memberId) {
    var profile = props.profileData.find(x => x.id === memberId)
    return (
      <p key={profile.id}>{profile.name}
        <button className="icon-button" onClick={() => removeGroupMember(profile.id)}>
          <i className="fas fa-minus-circle"></i>
        </button>
      </p>
    )
  }

  function removeGroupMember(memberId) {
    props.setNewGroup(prevInfo => ({
      ...prevInfo,
      members: prevInfo.members.filter(id => id !== memberId)
    }))
  }

  return(
    <div className="component">
      <h3>{props.newGroup.groupName}</h3>
      {props.newGroup.members.map(displayGroupMembers)}
    </div>
  )
}

export default CurrentGroupDisplay
