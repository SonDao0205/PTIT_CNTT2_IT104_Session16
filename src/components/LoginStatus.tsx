import { Component } from 'react'
import "../style/LoginStatus.css"
import 'bootstrap/dist/css/bootstrap.min.css';
interface State{
    isLoggedIn:boolean
}

export default class LoginStatus extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            isLoggedIn:false
        }
    }

    handleChangeStatus = () => {
        this.setState({isLoggedIn: this.state.isLoggedIn ? false : true})
    }
    render() {
        return (
        <div className="container">
            <h1>{this.state.isLoggedIn ? "Xin chào, User" : "Vui lòng đăng nhập để tiếp tục" }</h1>
            <button className='btn btn-primary' onClick={this.handleChangeStatus}>{this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}</button>
        </div>
        )
    }
}
