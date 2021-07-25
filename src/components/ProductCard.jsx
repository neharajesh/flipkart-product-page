import "../styles.css"

export const ProductCard = ({product}) => {
    return(<>
        <div key={product.id} className="productCard">
            <button className="wishlistButton"> 💗 </button>
            <img className="productImage" src={product.image} alt={product.name} />
            <div className="productDetails">
                <p className="prodBrand"> {product.brand.toUpperCase()} </p>
                <p className="prodName"> {product.name} </p>  
                <p className="prodPrice"> Rs. {product.price} </p>
            </div>
        </div>
    </>)
}