import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/UserForm.css"
interface Form{
    username:string,
    email:string,
    age:number
}

interface State{
    form:Form,
    error:string
    toggleError:boolean,
    toggleInformation:boolean
}

export default class UserForm extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            form:{
                username:``,
                email:``,
                age:0
            },
            error:``,
            toggleError:false,
            toggleInformation:false
        }
    }    

    handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        this.setState(prevState => ({
            toggleError:false,
            toggleInformation:false,
            form: {
                ...prevState.form,
                [name]: name === "age" ? Number(value) : value
            }
        }))
    }

    handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!this.validate()){
            return
        }
        this.setState({toggleInformation:true})
    }

    validate = ():boolean => {
        if(!this.state.form.email.endsWith("@gmail.com")){
            this.setState({
                error:"Email không hợp lệ!",
                toggleError:true
            })
            return false
        }
        if(this.state.form.age < 0){
            this.setState({
                error:"Tuổi không được âm!",
                toggleError:true
            })
            return false
        }
        return true
    }

    handleResetForm = () => {
        this.setState({
            form:{
                username:``,
                email:``,
                age:0
            }
        })
    }

    render() {
        return (
        <div className='container-fluid'>
            <h3>Nhập thông tin người dùng</h3>
            <form action="#" onSubmit={this.handleSubmit}>
                <input className='form-control' type="text" name="username" id="username" value={this.state.form.username} onChange={this.handleInput} placeholder='Họ tên'/>
                <br />
                <input className='form-control' type="email" name="email" id="email" value={this.state.form.email} onChange={this.handleInput} placeholder='Email'/>
                <br />
                <input className='form-control' type="number" name="age" id="age" placeholder="Tuổi" value={this.state.form.age} onChange={this.handleInput} />
                <br />
                <div className="button">
                    <button className="btn btn-primary" type="submit">Gửi</button>
                    <button className="btn btn-primary" type='button' onClick={this.handleResetForm}>Xoá tất cả</button>
                </div>
            </form>
            {this.state.toggleError && <div className="error">{this.state.error}</div>}
            {this.state.toggleInformation && 
            <div className='information'>
                <h4>Thông tin đã nhập</h4>
                <p>Họ tên : {this.state.form.username}</p>
                <p>Email : {this.state.form.email}</p>
                <p>Age : {this.state.form.age}</p>
            </div>}
        </div>
        )
    }
}
