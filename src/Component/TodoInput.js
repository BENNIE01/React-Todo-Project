import React, { Component } from 'react'
export default class TodoInput extends Component {
        render() {
            const {item, handleChange, handleSubmit,editItem} = this.props
        return (
            <div className='card card-body mt-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fas fa-book'/>

                            </div>
                           <input type='text' className='form-control text-capitalize'
                            placeholder='enter todo items'
                            value ={item}
                            onChange ={handleChange}
                            />
                    </div>

                   <div className="list-group">
                   <button className={editItem ? 'btn btn-success btn-sm mt-2 btn-block':
                                     'btn btn-primary btn-sm mt-2 btn-block'}>
                        {editItem ? "Edit Item" : "Add Item"}
                    </button>
                   </div>

                </form>
            </div>
        )
    }
}
