import React from "react"

function AddProfileForm(props) {
  const checkboxData = [
    {name: "isVegetarian", checked: props.newProfile.isVegetarian, text: "Vegetarian"},
    {name: "isVegan", checked: props.newProfile.isVegan, text: "Vegan"},
    {name: "isGlutenFree", checked: props.newProfile.isGlutenFree, text: "Gluten Free"},
    {name: "hasNutAllergy", checked: props.newProfile.hasNutAllergy, text: "Nut Allergy"}
  ];

  function handleSubmit(event){
    event.preventDefault();
    var profileIndex = props.profileData.findIndex(i => i.id === props.newProfile.id);

    props.setProfileData(prevInfo => {
      if (profileIndex === -1){
        return [...prevInfo, props.newProfile]
      } else {
        var prevProfiles = [...prevInfo]
        prevProfiles.splice(profileIndex, 1, props.newProfile);
        return prevProfiles
      }
    })

    props.setNewProfile({
      id: props.profileData.length + 2,
      name: "",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      hasNutAllergy: false
    });

    props.setSelectedProfile("");
  }

  return (
    <div className="component">
      {props.newProfile.name.length == 0 ? <h3>Add Profile</h3> : <h3>Edit Profile</h3>}
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          placeholder="Name"
          name="name"
          value={props.newProfile.name}
          onChange={(e) => props.handleChange(e, props.setNewProfile)}
        />
        <br />
        {checkboxData.map(item =>
          <div className="checkbox" key={item.name}>
            <label>
              <input
                type="checkbox"
                name={item.name}
                checked={item.checked}
                onChange={(e) => props.handleChange(e, props.setNewProfile)}
              />
               {item.text}
            </label>
            <br />
          </div>
        )}
        <button className="app-button">Save</button>
      </form>
    </div>
  )
}

export default AddProfileForm
