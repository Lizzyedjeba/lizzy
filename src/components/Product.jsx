import "./product.css"



const Product=({img,name,price})=>{

    return(
        <>
        <div className="product-wrap">
        <img src={img} alt="product image" />
        <p >{name}</p>
        <h4>#{price}</h4>
        </div>
        
        
        </>
    )
}
export default Product