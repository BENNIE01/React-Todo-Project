import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

export default class App extends Component {
    state={
        items : [],
        id    : 0,
        item  : "",
        editItem : false,
    }
    handleChange = e=>{
        this.setState({
            item : e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();

    const newItem={
        id : this.state.id,
        item : this.state.item,
    }
    console.log(newItem)

    const updatedItems=[...this.state.items, newItem];
    this.setState({
        items : updatedItems,
        id :this.state.id +1111,
        item : "",
        editItem : false,
    })
    }
    clearList=()=>{
        this.setState({
            items : []
        })
    }
    handleDelete =(id)=>{
        const sortedItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items : sortedItems
        })
    }
    handleEdit =(id)=>{
        const editedItems = this.state.items.filter(item => item.id !== id);

        const selectedItems = this.state.items.find(item => item.id === id);

        this.setState({
            items : editedItems,
            item : selectedItems.item,
            editItem : true,
            id : id
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-8 mt-4'>
                       <h3 className='text-capitalize text-center'> todo list</h3>

                <TodoInput item ={this.state.item} 
                           handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}
                           editItem={this.state.editItem}
                           />

                <TodoList 
                       handleDelete={this.handleDelete}
                       handleEdit={this.handleEdit}
                       items={this.state.items} 
                       clearList={this.clearList}/>
                    </div>
                </div>
            </div>
        )
    }
}
