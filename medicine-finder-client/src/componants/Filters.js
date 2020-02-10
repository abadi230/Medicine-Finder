import React, { Component } from 'react'

export default class Filters extends Component {
    render() {
        return (
            <div className='ui form'>
                <h3>Sort</h3>
                <div className='field'>
                    <select name='type' id='type' onChange={this.props.onChangeType}>
                        <option value='mile'>Mile</option>
                        <option value='price'>Price</option>
                    </select>
                </div>

                <div className='field'>
                    <button className='ui secondary button' onClick={this.props.onSort}>
                        Sort
                    </button>
                </div>
            </div>
        )
    }
}
