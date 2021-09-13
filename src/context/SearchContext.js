import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext=createContext() 

const SearchProvider = (props) => {

  const [searchData, setSearchData]=useState({})
  const [requestRecipes, setRequestRecipes]=useState([])
  const [isSubmitted, setIsSubmitted]=useState(false)

  useEffect(()=>{
    if(isSubmitted){
      const axiosRecipeReq=async ()=>{
        const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchData.ingredient}&c=${searchData.category}`
        const apiRecipes=await axios.get(url)
        //console.log(apiRecipes.data.drinks)
        setRequestRecipes(apiRecipes.data.drinks)
        setIsSubmitted(false)
      }
      axiosRecipeReq()
    }
  },[searchData.ingredient, searchData.category, isSubmitted])

  return ( 
    <SearchContext.Provider
      value={{
        setSearchData,
        requestRecipes,
        setIsSubmitted
      }}
    >
    {props.children}
    </SearchContext.Provider>
  );
}
 
export default SearchProvider;