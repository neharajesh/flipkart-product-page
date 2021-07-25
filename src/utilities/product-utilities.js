export const getPriceSortedList = (products, sortByPrice) => {
    if(sortByPrice && sortByPrice === "PRICE_LOW_TO_HIGH") {
        return products.sort((a, b) => b["price"] - a["price"])
    }
    if(sortByPrice && sortByPrice === "PRICE_HIGH_TO_LOW") {
        return products.sort((a, b) => a["price"] - b["price"])
    }
    return products
}
export const getBrandSortedList = (products, sortByBrand) => {
    if(sortByBrand && sortByBrand === "BRAND_ZARA") {
        return products.filter(product => product.brand === "Zara")
    }
    if(sortByBrand && sortByBrand === "BRAND_FEET") {
        return products.filter(product => product.brand === "Feet")
    }
    return products
}
export const getSizeSortedList = (products, sortBySize) => {
    if(sortBySize && sortBySize === "SIZE_S") {
        return products.filter(product => product.availableSizes.includes("S"))
    }
    if(sortBySize && sortBySize === "SIZE_M") {
        return products.filter(product => product.availableSizes.includes("M"))
    }
    if(sortBySize && sortBySize === "SIZE_L") {
        return products.filter(product => product.availableSizes.includes("L"))
    }
    if(sortBySize && sortBySize === "SIZE_XL") {
        return products.filter(product => product.availableSizes.includes("XL"))
    }
    return products
}
export const getIdealForSortedList = (products, sortByIdealFor) => {
    if(sortByIdealFor && sortByIdealFor === "IDEAL_MEN") {
        return products.filter(product => product.idealFor.includes("Men"))
    }
    if(sortByIdealFor && sortByIdealFor === "IDEAL_WOMEN") {
        return products.filter(product => product.idealFor.includes("Women"))
    }
    if(sortByIdealFor && sortByIdealFor === "IDEAL_UNISEX") {
        return products.filter(product => product.idealFor.includes("Unisex"))
    }
    return products
}