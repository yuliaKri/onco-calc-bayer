import "./App.css"
import ProductInventory from "./ProductInventory"
import ShoppingCart from "./ShoppingCart"
import {useState} from "react"
import {inventoryDB} from "./content"

function App() {

  const [shoppingCartList, setShoppingCartList] = useState([])

  const addToCart=(value)=>{

    setShoppingCartList([...shoppingCartList, value])
  }


  return (
    <div className="App">
      <ShoppingCart items={shoppingCartList}/>
      <ProductInventory inventoryDB={inventoryDB} addToCart={addToCart}/>
    </div>
  );
}

export default App;
