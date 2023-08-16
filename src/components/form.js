import React,{Component} from "react"
class Form extends Component{
    constructor(){
        super();
        this.state={
            task:""
        }
        this.formSubmitted=this.formSubmitted.bind(this);
    }
   
    formSubmitted(event){
        event.preventDefault();
        const newTask = event.target.taskInput.value;
        this.setState(
            {
                task: newTask
            },
            () => {
                // This callback will run after the state is updated
                this.props.sendDataToParent(this.state.task);
            }
        );
    }

    render(){
        return <form onSubmit={this.formSubmitted} className="border p-4 mt-3 bg-success rounded-2 row">
            <label htmlFor="taskInput" className="form-label display-6">Enter your task to be completed</label>
            <input id="taskInput" type="text" required className="form-control" name="task"/>
            <input type="submit" value="submit" className="mt-2 btn btn-primary col-4 "/>
        </form>
    }
}
export default Form;