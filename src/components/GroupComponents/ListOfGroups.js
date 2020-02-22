import React from "react"

function ListOfGroups(props){
  const display =
    props.groupData.length > 0 ?
    props.groupData.map(item =>
      <p key={item.groupName}>
        {item.groupName}
        <button className="icon-button" onClick={() => props.setNewGroup(item)}><i className="fas fa-edit"></i></button>
      </p>
    ) :
    <p>No groups yet.</p>

  return (
    <div className="component">
      <h3>Your Groups</h3>
      {display}
    </div>
  )
}

export default ListOfGroups
