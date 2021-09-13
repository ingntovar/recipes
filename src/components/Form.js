import { useContext, useState } from "react";
import {CategoriesContext} from "../context/CategoriesContext"
import {SearchContext} from "../context/SearchContext"

const Form = () => {

  const {categories}=useContext(CategoriesContext)
  const {setSearchData, setIsSubmitted}=useContext(SearchContext)
  const [inputData, setInputData]=useState({
    ingredient:"",
    category:""
  })
  

  const handleInputs=(e)=>{
    setInputData({
      ...inputData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsSubmitted(true)
    setSearchData(inputData)
  }

  //console.log('Drinks from Form', categories)
  
  return ( 
    <form className= "col-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend >  Search drinks by category or ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input 
            name="ingredient" 
            className="form-control" 
            type="text" 
            placeholder="Search by ingredient" 
            value={inputData.ingredient}
            onChange={handleInputs}
          />
        </div>
        <div className="col-md-4">
          <select onChange={handleInputs} className="form-control" name="category" value={inputData.category}>
            <option value="">-Select category</option>
            {categories.map((category, index)=><option value={category.strCategory} key={index}>{category.strCategory}</option>)}
          </select>
        </div>
        <div className="col-md-4">
          <input 
            type="submit"
            className="btn btn-block btn-primary"
            value="Search drinks" 
          />
        </div>
      </div>
    </form>
   );
}
 
export default Form;