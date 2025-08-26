import { Component } from 'react'
import "../../style/Shop.css"
import type {Product} from "./product.data"
import {products} from "./product.data"
import type {Cart} from "./product.data"
interface State{
  carts:Cart[]
}

export default class ProductList extends Component<{},State> {
    constructor(props:{}){
      super(props)
      this.state = {
          carts:JSON.parse(localStorage.getItem("carts") || "[]")
      }
    }

    findProduct = (id:number):Product|undefined => {
      return products.find(ele => ele.id === id)
    }

    addToCart = (id:number) => {
      const findProduct = this.findProduct(id)
      if(!findProduct) return
      const { carts } = this.state;
      const existingProductIndex = carts.findIndex(cart => cart.productId === id);
      if (existingProductIndex !== -1) {
        const updatedCarts = [...carts];
        const currentQuantityInCart = updatedCarts[existingProductIndex].productInCartQuantity;

        if (currentQuantityInCart < findProduct.quantity) {
          updatedCarts[existingProductIndex].productInCartQuantity += 1;
          this.setState({carts:updatedCarts})
          localStorage.setItem("carts", JSON.stringify(this.state.carts));
          window.dispatchEvent(new Event("cartUpdated"));
        } else {
          alert("Số lượng sản phẩm trong kho không đủ");
        }
      } else{
        const newCartItem = {
          productId: findProduct.id,
          productName: findProduct.name,
          productImage: findProduct.image,
          productPrice: findProduct.price,
          productInCartQuantity: 1
        };
        const updatedCarts = [...carts, newCartItem];
        this.setState({carts:updatedCarts})
        localStorage.setItem("carts", JSON.stringify(this.state.carts));
        window.dispatchEvent(new Event("cartUpdated"));
      }
    }

    render() {
      return (
        <>
          {products.map((element) => {
            return <div className="product" key={element.id}>
                      <img src={element.image} alt="iphone" />
                      <p className="productName">{element.name}</p>
                      <p className="price">{element.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                      <button className='addToCart' onClick={() => this.addToCart(element.id)}>Thêm vào giỏ hàng</button>
                  </div>
          })}
        </>
      )
    }
}
