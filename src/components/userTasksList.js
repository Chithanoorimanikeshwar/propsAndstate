import React,{Component, Fragment} from "react"
import './userTaskList.css'
class UserTasksList extends Component
{
    checkboxStatus
    constructor(props){
        super(props);
        this.state={
            taskList:props.updateTaskList?[]:[],
            isChecked:false,
            isCheckedClass:"unchecked",
            checkBoxArray:[]
        }
        this.removeTask = this.removeTask.bind(this);
        this.checkboxStatus=false;
    }
    updateState=()=>{
        const updatedArray=[...this.state.taskList];
        updatedArray.push(this.props.updateTaskList);
        const updatedcheckboxArray=[...this.state.checkBoxArray];
        updatedcheckboxArray.push(false);
        console.log('getDerivedstate',updatedArray);
        
        this.setState({
            taskList:updatedArray,
            checkBoxArray:updatedcheckboxArray
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.updateTaskList !== this.props.updateTaskList){
            this.updateState();
        }
        return ;
    }
    removeTask=(event)=>{
        event.preventDefault();
        const removeTask=event.target.firstChild.innerHTML.trim();
        const state=[...this.state.taskList];
        console.log('stateBeforeUpdate',state);
        const updatedState=state.filter((task)=>{return !(task===removeTask)} )
        console.log("updatedStateArray",updatedState);
        this.setState({
            taskList:updatedState
        },()=>{
             console.log('callbackAferUpdating',this.state.taskList,updatedState);
        })
        
    }
    istaskChehcked=(event)=>{
        const target=event.target.name.split('-')[1];
       this.setState((prevState)=>{
        const updatedstate=this.state.checkBoxArray;
        updatedstate[target]=!prevState.checkBoxArray[target];
        console.log(prevState);
        return {
            checkBoxArray:updatedstate
        }
    })
    }
    render(){
        return (
            <Fragment>
                <ul className="p-0 mt-3">
          {this.state.taskList.filter((item)=>{
            return !(item === "")
          }).map((item, index) => (
            <form key={index} className={`row border p-4 rounded-2 mb-1 ${this.state.checkBoxArray[index]?"checked":"unchecked"}`} onSubmit={this.removeTask}> 
            <li  className="border nav-link col border-0 m-0">{item}</li>
             <input type="checkbox" name={`checkbox-${index}`} className="col-2" onChange={this.istaskChehcked} checked={this.state.checkBoxArray[index]}/>
             <button className="btn btn-secondary col-2">Remove</button>
            </form>
          ))}
        </ul>
            </Fragment>
        )
        
    }
}
export default UserTasksList