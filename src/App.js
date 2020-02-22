import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import Profiles from "./components/ProfileComponents/Profiles"
import Groups from "./components/GroupComponents/Groups"
import Food from "./components/FoodComponents/Food"
import exampleData from "./exampleData"

function App() {
  const [profileData, setProfileData] = useState(exampleData);
  //some example groups are provided in the initial state
  const [groupData, setGroupData] = useState([
    {groupName: "Dinner Party", members: [1, 2, 3, 4]},
    {groupName: "Breakfast", members: [3, 2, 4]}
  ])

  function handleChange(event, stateUpdateFunction){
    const {name, value, type, checked} = event.target;
    type ==="checkbox" ?
    stateUpdateFunction(prevInfo => ({...prevInfo, [name]: checked})) :
    stateUpdateFunction(prevInfo => ({...prevInfo, [name]: value}));
  }

  return (
    <div id="app-container">
      <Header />
      <Navbar />
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/profiles">
            <Profiles
              profileData={profileData}
              setProfileData={setProfileData}
              handleChange={handleChange}
            />
          </Route>
          <Route path="/groups">
            <Groups
              profileData={profileData}
              handleChange={handleChange}
              groupData={groupData}
              setGroupData={setGroupData}
            />
          </Route>
          <Route path="/food">
            <Food
              groupData={groupData}
              profileData={profileData}
              groupData={groupData}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
