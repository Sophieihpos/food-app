import React from "react"

function ChooseGroup(props){

  function handleClick(groupName){
    props.setCurrentGroup(groupName)
  }

  return (
    <div className="component">
      <h3>Select Group</h3>
      <ul className="list-display">
        {props.groupData.map(group =>
          <li className="list-display-item" key={group.groupName} onClick={() => handleClick(group.groupName)}>{group.groupName}</li>
        )}
      </ul>
    </div>
  )

}

export default ChooseGroup
