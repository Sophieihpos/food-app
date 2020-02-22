import React, {useState} from "react"
import AddProfileForm from "./AddProfileForm"
import ProfilesList from "./ProfilesList"
import ProfileDisplay from "./ProfileDisplay"

function Profiles(props){
  const [selectedProfile, setSelectedProfile] = useState("");
  const [newProfile, setNewProfile] = useState({
    id: props.profileData.length + 1,
    name: "",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    hasNutAllergy: false
  });

  return(
    <div className="component-container">
        <ProfilesList
          profileData={props.profileData}
          setSelectedProfile={setSelectedProfile}
          setNewProfile={setNewProfile}
        />
        {selectedProfile.length > 0 ?
          <ProfileDisplay
          selectedProfile={selectedProfile}
          profileData={props.profileData}
          /> :
          null
        }
        <AddProfileForm
          profileData={props.profileData}
          setProfileData={props.setProfileData}
          handleChange={props.handleChange}
          newProfile={newProfile}
          setNewProfile={setNewProfile}
          setSelectedProfile={setSelectedProfile}
        />
    </div>
  )
}

export default Profiles
