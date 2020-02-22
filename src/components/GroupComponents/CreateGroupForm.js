import React from "react"

function CreateGroupForm(props){
  function addProfiletoGroup(item){
    props.setNewGroup(prevInfo => ({...prevInfo, members: [...prevInfo.members, item.id]}))
  }

  function handleSubmit(event){
    event.preventDefault();

    var groupIndex = props.groupData.findIndex(i => i.groupName === props.newGroup.groupName)
    props.setGroupData(prevInfo => {
      if (groupIndex === -1){
        return [...prevInfo, props.newGroup]
      } else {
        var prevGroups = [...prevInfo]
        //use splice to replace old group with new
        prevGroups.splice(groupIndex, 1, props.newGroup)
        return prevGroups
      }
    })

    props.setNewGroup({groupName: "", members: []})
  }

  return (
    <div className="component">
      {props.newGroup.groupName.length === 0 ? <h3>Add Group</h3> : <h3>Edit Group</h3>}
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          placeholder="Group Name"
          name="groupName"
          value={props.newGroup.groupName}
          onChange={(e) => props.handleChange(e, props.setNewGroup)}
        />
        <div>
          <ul className="list-display">
            {props.profileData.map(item =>
              <li className="list-display-item" key={item.name} onClick={() => addProfiletoGroup(item)}>{item.name}</li>
            )}
          </ul>
        </div>
        <button className="app-button">Save Group</button>
      </form>
    </div>
  )
}

export default CreateGroupForm
