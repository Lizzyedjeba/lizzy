
import './App.css'
import Product from './components/Product'
function App() {
  const productData = [
    {
      productName:"Infinix Smart8",
      productPrice:"98,000",
      productImage:"./Images/Infinix Smart8.jpg"
  },
  {
      productName:"IPhone 12",
      productPrice:"2,000,000",
      productImage:"./Images/IPhone 12.jpg"
  },
  {
      productName:"Itel S23",
      productPrice:"80,000",
      productImage:"./Images/Itel S23.jpg"
  },
  {
      productName:"Samsung Galaxy A15",
      productPrice:"1,500,000",
      productImage:"./Images/samsung galaxy A15.jpg"
  }
]


  return (
    <>
    <h1>Product Page</h1>
      <div className="wrap">
      <ul>{
        productData.map(
          (items, index)=>{
            return(
              
                <Product key={index}  img={items.productImage} name={items.productName} price={items.productPrice}/>
              
            )
          }
        )
        
        }

      </ul>
  
      
      </div> 
      
    </>
  )
}

export default App
