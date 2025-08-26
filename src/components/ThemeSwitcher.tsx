import { Component } from 'react'

interface State{
    isDarkMode:boolean
}

export default class ThemeSwitcher extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            isDarkMode:false
        }
    }

    handleChange = () => {
        this.setState({isDarkMode:this.state.isDarkMode ? false : true})
        console.log(this.state.isDarkMode);
        
    }

    render() {
        return (
        <div style={{textAlign:`center`,backgroundColor:this.state.isDarkMode ? `white` : `black`,color:this.state.isDarkMode ? `black` : `white`}}>
            {this.state.isDarkMode 
            ? <h1>☀️ Chế độ Sáng đang bật</h1> 
            : <h1>🌙 Chế độ Tối đang bật</h1>
            }
            <button onClick={this.handleChange}>Chuyển theme</button>
        </div>
        )
    }
}
