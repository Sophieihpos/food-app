import React, {useState, useEffect} from "react"
import ingredientsList from "./ingredientsList"

function IngredientInput(props) {
  const [listOpen, setListOpen] = useState(false)
  const [ingredientInput, setIngredientInput] = useState("")

  function handleSelect(ingredient){
    props.setIngredient(ingredient.toLowerCase())
    setIngredientInput("")
    setListOpen(!listOpen)
  }

  useEffect(() => {
      if (ingredientInput.length > 0) {
        setListOpen(true)
      } else {
        setListOpen(false)
      }
    }, [ingredientInput]
  );

  function dropDownInput(e) {
    setIngredientInput(e.target.value);
  }

  //Compares to ingredientInput to each ingredient in ingredientsList. Displays what matches
  function dropDownDisplay(ingredient) {
    var ingredientLowerCase = ingredient.toLowerCase();
    var ingredientInputLowerCase = ingredientInput.toLowerCase();
    if (ingredientLowerCase.startsWith(ingredientInputLowerCase) === true) {
      return <li className="list-display-item" key={ingredient} onClick={() => handleSelect(ingredient)}>{ingredient}</li>
    }
  }

  return (
    <div className="component">
      <h3>Search an ingredient</h3>
      <input
        className="text-input"
        placeholder="Type Ingredient"
        name="ingredientInput"
        value={ingredientInput}
        onChange={(e) => dropDownInput(e)}
      />
      {listOpen && <ul className="list-display">
        {ingredientsList.map(ingredient => dropDownDisplay(ingredient))}
      </ul>}
    </div>
  )
}

export default IngredientInput
