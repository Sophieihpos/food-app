import React, {useState} from "react"
import ChooseGroup from "./ChooseGroup"
import IngredientInput from "./IngredientInput"
import MembersDisplay from "./MembersDisplay"

function Food(props){
  const [currentGroup, setCurrentGroup] = useState("");
  const [ingredient, setIngredient] = useState("")

  return(
    <div className="component-container">
      <ChooseGroup
        groupData={props.groupData}
        setCurrentGroup={setCurrentGroup}
      />
      <IngredientInput
        setIngredient={setIngredient}
      />
      <MembersDisplay
        currentGroup={currentGroup}
        profileData={props.profileData}
        groupData={props.groupData}
        ingredient={ingredient}
      />
    </div>
  )
}

export default Food
