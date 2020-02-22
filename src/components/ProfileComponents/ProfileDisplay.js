import React from "react"

function ProfileDisplay(props) {
    var profile = props.profileData.find(x => x.name === props.selectedProfile)

    return (
      <div className="component">
        <h3>Profile Display</h3>
        <p><b>{profile.name}</b></p>
        <p>Vegetarian: {profile.isVegetarian ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}</p>
        <p>Vegan: {profile.isVegan ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}</p>
        <p>Gluten Free: {profile.isGlutenFree ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}</p>
        <p>Nut Allergy: {profile.hasNutAllergy ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}</p>
      </div>
    )
}

export default ProfileDisplay
