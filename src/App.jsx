
import './App.css'
import Product from './components/Product'
import Image1 from "/src/assets/Infinix.jpg"
import Image2 from "/src/assets/IPhone.jpg"
import Image3 from "/src/assets/Itel.jpg"
import Image4 from "/src/assets/Samsung.jpg"
function App() {
  const productData = [
    {
      productName:"Infinix Smart8",
      productPrice:"98,000",
      productImage:Image1
  },
  {
      productName:"IPhone 12",
      productPrice:"2,000,000",
      productImage:Image2
  },
  {
      productName:"Itel S23",
      productPrice:"80,000",
      productImage:Image3
  },
  {
      productName:"Samsung Galaxy A15",
      productPrice:"1,500,000",
      productImage:Image4
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
