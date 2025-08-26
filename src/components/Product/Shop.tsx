import { Component } from 'react'
import Header from './Header'
import ProductList from './ProductList'
import "../../style/Shop.css"
import ModalCart from './ModalCart'
interface State{
    isCartOpen: boolean,
}

export default class Shop extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            isCartOpen:false,
        }
    }

    toggleCart = () => {
        this.setState({ isCartOpen: !this.state.isCartOpen })
    }

    render() {
        return (
            <div className='container'>
                <header>
                    <Header onToggleCart={this.toggleCart}/>
                </header>
                <main>
                    <ProductList/>
                </main>
                {this.state.isCartOpen && <ModalCart />}
            </div>
        )
    }
}
