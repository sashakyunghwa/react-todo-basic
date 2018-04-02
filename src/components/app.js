import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import AddForm from './add_form';
import List from './list';
import listData from '../data/todo_items';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            list: listData
        }
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        });
    }

    deleteItem(index){

        // const newList = this.state.list.slice()

        const newList = [...this.state.list]; //making a new array with the values from the original array

        newList.splice(index, 1);

        // console.log('New:', newList);
        // console.log('Old:', this.state.list);

        this.setState({
            list: newList
        });
    }

    render(){
        return (
            <div className="container">
            <h1 className="center">To Do List</h1>
            <AddForm add={this.addItem.bind(this)}/>
            <List list={this.state.list} delete={this.deleteItem.bind(this)}/>
         </div>
        )
    }
}

export default App;
