import React,{Component} from "react";
import Form from "./components/form"
import UserTasksList from "./components/userTasksList"
export class App extends Component{
    constructor(){
        super();
        this.state={
            userTask:""
        }
        this.userTask=this.userTask.bind(this);
    }
    userTask(taskData){
        this.setState({
            userTask:taskData
        })
    }

    render(){
        return <div className="container">
            <Form sendDataToParent={this.userTask}/>
            <UserTasksList updateTaskList={this.state.userTask}/>
        </div>
    }
}