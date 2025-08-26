import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
interface State{
    count:number
}

export default class ClickCounter extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            count:0
        }
    }

    handleClick = () => {
        this.setState({count: (this.state.count + 1)})
    }

    render() {
        return (
        <div>
            <p>Count : {this.state.count}</p>
            <button className="btn btn-primary" onClick={this.handleClick}>Click me</button>
        </div>
        )
    }
}
