import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const CategoriesContext=createContext()

const CategoriesProvider=(props)=>{
  
  const [categories, setCategories]=useState([])

  useEffect(()=>{
    
    const requestIngredientsApi= async ()=>{
      const url="https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      const axiosIngredients= await axios.get(url)
      setCategories(axiosIngredients.data.drinks)
    }
    requestIngredientsApi()

  },[])


  return(
    <CategoriesContext.Provider
      value={{
        categories
      }}
    >
      {props.children}
    </CategoriesContext.Provider>

  )
}

export default CategoriesProvider
