const rootId = document.getElementById('root');

class Input extends React.Component{
    state ={
        title:"",
        date:"",
        day: "All"
    }

    changeTitleInput=(event)=>{
        this.setState({
            title: event.target.value
        })
    }

    changeDateInput=(event)=>{
        this.setState({
            date: event.target.value,
            day: new Date(event.target.value).getDay()
        })
    }

    render(){
        return(
            <div className="container-fluid mt-5">
                <input onChange={(event)=>{this.changeTitleInput(event)}} value={this.state.title} type="text" placeholder="Task"></input>
                <input onChange={(event)=>{this.changeDateInput(event)}} value={this.state.date} type="date"></input>
                <button onClick={()=>{this.props.sendDataFromInput(this.state); this.setState({title:"", date:""})}}>Save</button>
                <h3 className="mt-2">You write we print:</h3>
                <span>{this.state.title}</span>
            </div>
        )
    }
}

class Table extends React.Component{
    render(){
        return(
            <table className="table table-striped mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th>Tasks</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos && this.props.todos.map((todo, index) =>{
                        if(todo.day == this.props.day || this.props.day === "All"){
                            return(
                                <tr key={index}>
                                    <td>
                                        {todo.title}
                                    </td>
                                    <td>
                                        {todo.date}
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        )
    }
}



class RenderWrapper extends React.Component{
    state = {
        todos: [],
        filterDay: "",
        day: "All",
    }

    addTodoToList=(todo)=>{
        if(todo.title && todo.date){
            this.setState({
                todos : [...this.state.todos, todo]
            })
        }
    }

    handleFilter=(event)=>{
        const dayValue = event.target.value;
        this.setState({
            day: dayValue
        });
    }

    render(){
        return(
            <div>
                <Input sendDataFromInput={(todo)=>{this.addTodoToList(todo)}}/>
                <select className="ml-3 mt-2" onChange={(event) =>{this.handleFilter(event)}}>
                    <option value="All">ALL</option>
                    <option value="0">SUN</option>
                    <option value="1">MON</option>
                    <option value="2">TUE</option>
                    <option value="3">WED</option>
                    <option value="4">THUR</option>
                    <option value="5">FRI</option>
                    <option value="6">SAT</option>
                </select>
                <Table todos={this.state.todos} day={this.state.day}/>
            </div>
        )
    }
}

ReactDOM.render(<RenderWrapper/>, rootId);