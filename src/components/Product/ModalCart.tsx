import { Component } from 'react'
import type {Cart} from "./product.data"
import {products} from "./product.data"
import Swal from 'sweetalert2'
interface State{
    carts:Cart[]
}

export default class ModalCart extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            carts:JSON.parse(localStorage.getItem("carts") || "[]")
        }
    }

    componentDidMount() {
        window.addEventListener("cartUpdated", this.handleCartUpdated);
    }

    componentWillUnmount() {
        window.removeEventListener("cartUpdated", this.handleCartUpdated);
    }

    handleCartUpdated = () => {
        const updatedCart = JSON.parse(localStorage.getItem("carts") || "[]");
        this.setState({ carts: updatedCart });
    }

    increaseQuantity = (id:number) => {
        const updatedCart = [...this.state.carts]
        const productIndex = this.state.carts.findIndex(ele => ele.productId === id)
        if(productIndex === -1) return
        const productInProductsIndex = products.findIndex(ele => ele.id === id)
        if (Number(updatedCart[productIndex].productInCartQuantity) < Number(products[productInProductsIndex].quantity)) {
            updatedCart[productIndex].productInCartQuantity++
            this.setState({carts:updatedCart})
            localStorage.setItem("carts", JSON.stringify(this.state.carts));
        }
        else{
            Swal.fire({
                text: "Số lượng sản phẩm trong kho không đủ!",
                icon: "error"
            });
        }
    }

    decreaseQuantity = (id:number) => {
        const updatedCart = [...this.state.carts]
        const productIndex = this.state.carts.findIndex(ele => ele.productId === id)
        if(productIndex === -1) return
        if (updatedCart[productIndex].productInCartQuantity === 1) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    updatedCart.splice(productIndex,1)
                    this.setState({carts:updatedCart})
                    localStorage.setItem("carts", JSON.stringify(this.state.carts));
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                }
            });
        }
        else{
            updatedCart[productIndex].productInCartQuantity--
            this.setState({carts:updatedCart})
            localStorage.setItem("carts", JSON.stringify(this.state.carts));
        }
    }

    deleteProductInCart = (id:number) => {
        const updatedCart = [...this.state.carts]
        const productIndex = this.state.carts.findIndex(ele => ele.productId === id)
        if(productIndex === -1) return
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                updatedCart.splice(productIndex,1)
                this.setState({ carts: updatedCart }, () => {
                    localStorage.setItem("carts", JSON.stringify(this.state.carts));
                });
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
            }
        });
    }

    render() {
        const totalPrice = this.state.carts.reduce((total, item) => {
            return total + (item.productPrice * item.productInCartQuantity);
        }, 0);
        return (
            <div className="modalCart">
                <div className="modalHeader">
                    <p style={{fontSize:"24px"}}>Cart</p>
                </div>
                <hr />
                <div className="productInCart">
                    {this.state.carts.map(element => {
                        return <div className="product" key={element.productId}>
                                    <div className="infor">
                                        <img src={element.productImage} alt="iphone" />
                                        <div className="nameProduct">{element.productName}</div>
                                    </div>
                                    <div className="action">
                                        <button onClick={() => this.increaseQuantity(element.productId)}>+</button>
                                        <p>{element.productInCartQuantity}</p>
                                        <button onClick={() => this.decreaseQuantity(element.productId)}>-</button>
                                        <button className='deleteCart' onClick={() => this.deleteProductInCart(element.productId)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                                    </div>
                                </div>
                    })}
                </div>
                <hr />
                <div className="totalPrice">
                    <p>Tổng tiền : {totalPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                </div>
            </div>
        )
    }
}
