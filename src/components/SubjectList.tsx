import { Component } from 'react'
import "../style/SubjectList.css"
interface Subject{
    subject:string
}

interface State{
    subjects:Subject[]
}

export default class SubjectList extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            subjects:[]
        }
    }

    componentDidMount(): void {
        this.setState({
            subjects:[
                {subject:`Toán`},
                {subject:`Văn`},
                {subject:`Anh`},
                {subject:`Hoá`},
                {subject:`Sinh`}
            ]
        })
    }

    render() {
        return (
        <div className="container">
            <h1>Danh sách môn học</h1>
            <ul>
                {this.state.subjects.map((element,index) => {
                    return <li key={index}>{element.subject}</li>
                })}
            </ul>
        </div>
        )
    }
}
