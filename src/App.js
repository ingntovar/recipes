import Header from "./components/Header";
import Form from "./components/Form";
import RecipsLists from "./components/RecipsList";
import CategoriesProvider from "./context/CategoriesContext";
import SearchProvider from "./context/SearchContext";
function App() {
  return (
    <CategoriesProvider>
      <SearchProvider>
        <Header/>
        <div className="container mt-5">
          <div className="row">
            <Form/>
          </div>
          <RecipsLists/>
        </div>
      </SearchProvider>
    </CategoriesProvider>
  );
}

export default App;
