import React from "react"
import nonVegFood from "./nonVegFood"
import nonVeganFood from "./nonVeganFood"
import nonGlutenFreeFood from "./nonGlutenFreeFood"
import nonNutAllergyFood from "./nonNutAllergyFood"

function MembersDisplay(props) {
  function findGroup(currentGroupName){
    if (currentGroupName === "") {
      return "No group chosen"
    } else {
      var group = props.groupData.find(x => x.groupName === currentGroupName)
      return (
        group.members.map(displayGroupMembers)
      )
    }
  }

  function displayGroupMembers(memberId) {
    var profile = props.profileData.find(x => x.id === memberId)

    return (
      <li key={profile.id}>{profile.name} {iconDisplay(profile) ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}</li>
    )
  }

  // iconDisplay returns true if person can eat ingredient and false if they can't

  function iconDisplay(profile){
    if (profile.isVegetarian === true && vegetarianCheck(props.ingredient) === true) {
        return false;
    } else if (profile.isVegan === true && veganCheck(props.ingredient) === true) {
        return false;
    } else if (profile.isGlutenFree === true && glutenFreeCheck(props.ingredient) === true) {
        return false;
    } else if (profile.hasNutAllergy === true && nutAllergyCheck(props.ingredient) === true) {
        return false;
    } else {
      return true;
    }
  }

  // these functions return true if the person can't eat it.

  function vegetarianCheck(ingredient) {
    return nonVegFood.includes(ingredient)
  }

  function veganCheck(ingredient) {
    return nonVeganFood.includes(ingredient)
  }

  function glutenFreeCheck(ingredient) {
    return nonGlutenFreeFood.includes(ingredient)
  }

  function nutAllergyCheck(ingredient) {
    return nonNutAllergyFood.includes(ingredient)
  }

  const ingredientDisplay = props.ingredient.length > 0 ? props.ingredient[0].toUpperCase() + props.ingredient.slice(1) : "";

  return (
    <div className="component">
      <h3>Who can eat it</h3>
      <p><b>{props.currentGroup}</b></p>
      <p>Ingredient: {ingredientDisplay}</p>
      <ul className="list-display">
        {findGroup(props.currentGroup)}
      </ul>
    </div>

  )
}

export default MembersDisplay
