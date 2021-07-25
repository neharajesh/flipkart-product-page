import { useReducer } from "react";
import { useSearch } from "../context/SearchContext"
import { initialFilterData, reducerFunction } from "../utilities/product-reducer";

export const Header = () => {
    const { setSearch } = useSearch();
    return (<>
        <div className="headerContainer">
            <div className="horizontalContainer">
                <p className="navLink"> Mart </p>
                <label className="searchContainer">
                    <input onChange={e => setSearch(e.target.value)} className="searchBar" type="text" placeholder="Search for brands, products and more" />
                    <span className="searchButton"> 🔍 </span>
                </label>
            </div>
            
            <div className="horizontalContainer">
                <p className="navLink"> Login </p>
                <p className="navLink"> 🛒Cart </p>
            </div>
        </div>
    </>)
}