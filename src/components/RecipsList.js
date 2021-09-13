import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import Recip from "./Recip";

const RecipsLists = () => {

  
  const {requestRecipes}=useContext(SearchContext)
  return ( 
    <div className="row mt-5">
      {requestRecipes.map(recip=>(
        <Recip 
          key={recip.idDrink}
          recip={recip} 
        />
      ))}
    </div>
   );
}
 
export default RecipsLists;