import React, {useState} from "react"
import CreateGroupForm from "./CreateGroupForm"
import ListOfGroups from "./ListOfGroups"
import CurrentGroupDisplay from "./CurrentGroupDisplay"

function Groups(props) {
  const [newGroup, setNewGroup] = useState({groupName: "", members: []})

  return(
    <div className="component-container">
      <ListOfGroups
        groupData={props.groupData}
        setNewGroup={setNewGroup}
      />
      {newGroup.groupName.length > 0 ?
        <CurrentGroupDisplay
          newGroup={newGroup}
          setNewGroup={setNewGroup}
          profileData={props.profileData}
        /> :
        null
      }
      <CreateGroupForm
        newGroup={newGroup}
        setNewGroup={setNewGroup}
        profileData={props.profileData}
        addProfiletoGroup={props.addProfiletoGroup}
        handleChange={props.handleChange}
        groupData={props.groupData}
        setGroupData={props.setGroupData}
      />
    </div>

  )
}

export default Groups
