import React, { Component } from "react";
import ChildUser from "./listLevel234";

class ParentUser extends Component {
    state = {
        usernames: ["John", "Maria", "Chris", "Ruhan", "Trump"],
        displayUser: "John",
        todo: [],
        styles: {
            "John": "blue",
            "Maria": "red",
            "Maria": "orange",
            "Ruhan": "voilet",
            "Trump": "green"
        }
    };

    handleTodo = (username, todo) => {
        let data = { username, todo };
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.todo.push(data);
        this.setState({
            todo: stateCopy.todo
        });
    };

    handleUser = value => {
        this.setState({
            displayUser: value
        });
    };

    render() {
        return (
            <div className="mt-3 container">
                <select
                    className="select-user mb-2"
                    onChange={event => this.handleUser(event.target.value)}
                >sdnfjsa
                    {this.state.usernames.map(data => (
                        <option value={data}>{data}</option>
                    ))}
                </select>
                <br/>
                <ChildUser
                    usernames={this.state.usernames}
                    todo={(username, todo) => this.handleTodo(username, todo)}
                />

                <ul>
                    {this.state.todo.map(data => {
                        if (data.username === this.state.displayUser) {
                            return (
                                <li style={{ backgroundColor: this.state.styles[this.state.displayUser]}}>
                                    {data.todo} - {data.username}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default ParentUser;
