import { useReducer } from "react";
import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../context/ProductContext"
import { useSearch } from "../context/SearchContext";
import { initialFilterData, reducerFunction } from "../utilities/product-reducer";
import { getBrandSortedList, getIdealForSortedList, getPriceSortedList, getSearchSortedList, getSizeSortedList } from "../utilities/product-utilities";

export const Products = () => {
    const { productList } = useProduct();
    const { search } = useSearch();
    const [{sortByPrice, sortByBrand, sortBySize, sortByIdealFor}, dispatch ] = useReducer(reducerFunction, initialFilterData)    

    let filteredProducts = productList
    const priceSortedList = getPriceSortedList(filteredProducts, sortByPrice)
    const brandSortedList = getBrandSortedList(priceSortedList, sortByBrand)
    const sizeSortedList = getSizeSortedList(brandSortedList, sortBySize)
    let filteredData = getIdealForSortedList(sizeSortedList, sortByIdealFor)

    if(search !== "") {
        filteredData = productList.filter(product => product.name.toLowerCase().includes(search))
    }

    return (<>
        <div className="productPageContainer">
            <div className="filterContainer">
                <div className="filterSection">
                <p className="filterSectionTitle"> SORT BY PRICE </p>
                    <label> 
                        <input 
                        type="radio" 
                        onChange={() =>
                            dispatch({ type: "SORT_BY_PRICE", payload: "PRICE_LOW_TO_HIGH"})                        
                        } 
                        checked = {sortByPrice && sortByPrice === "PRICE_LOW_TO_HIGH"} /> 
                        High to Low 
                    </label>
                    <br />
                    <label>
                        <input type="radio" 
                        onChange={() =>
                            dispatch({ type: "SORT_BY_PRICE", payload: "PRICE_HIGH_TO_LOW"})                        
                        } 
                        checked = {sortByPrice && sortByPrice === "PRICE_HIGH_TO_LOW"} /> Low to High
                    </label>
                </div>

                <div className="filterSection">
                    <p className="filterSectionTitle"> SIZE </p>
                    <label>
                        <input type="radio" 
                        onChange={() =>
                            dispatch({ type: "SORT_BY_SIZE", payload: "SIZE_S"})                        
                        } 
                        checked = {sortBySize && sortBySize === "SIZE_S"} /> S
                    </label>
                    <br />
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_SIZE", payload: "SIZE_M"})                        
                        } 
                        checked = {sortBySize && sortBySize === "SIZE_M"} /> M
                    </label>
                    <br />
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_SIZE", payload: "SIZE_L"})                        
                        } 
                        checked = {sortBySize && sortBySize === "SIZE_L"} /> L
                    </label>
                    <br />
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_SIZE", payload: "SIZE_XL"})                        
                        } 
                        checked = {sortBySize && sortBySize === "SIZE_XL"} /> XL
                    </label>
                </div>

                <div className="filterSection">
                    <p className="filterSectionTitle"> BRAND </p>
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_BRAND", payload: "BRAND_ZARA"})                        
                        } 
                        checked = {sortByBrand && sortByBrand === "BRAND_ZARA"} /> Zara
                    </label>
                    <br />
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_BRAND", payload: "BRAND_FEET"})                        
                        } 
                        checked = {sortByBrand && sortByBrand === "BRAND_FEET"} /> Feet
                    </label>
                </div>

                <div className="filterSection">
                    <p className="filterSectionTitle"> IDEAL FOR </p>
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_IDEAL_FOR", payload: "IDEAL_MEN"})                        
                        } 
                        checked = {sortByIdealFor && sortByIdealFor === "IDEAL_MEN"} /> Men
                    </label>
                    <br />
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_IDEAL_FOR", payload: "IDEAL_WOMEN"})                        
                        } 
                        checked = {sortByIdealFor && sortByIdealFor === "IDEAL_WOMEN"} /> Women
                    </label> 
                    <br />    
                    <label>
                        <input type="radio"
                        onChange={() =>
                            dispatch({ type: "SORT_BY_IDEAL_FOR", payload: "IDEAL_UNISEX"})                        
                        } 
                        checked = {sortByIdealFor && sortByIdealFor === "IDEAL_UNISEX"} /> Unisex
                    </label> 
                    <br />                        
                </div>  
                <button className="resetFiltersButton" onClick={() => dispatch({type: "RESET_FILTERS"})}> Reset Filters </button>      
            </div>
            

            <div className="productsContainer">
                {filteredData.length === 0 && "No Products Found"}
                {filteredData.map(product => <ProductCard product={product} />)}
            </div>
        </div>        
    </>)
}