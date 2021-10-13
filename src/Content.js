import React, { Component } from 'react';
import './Content.css';
import { FiSearch } from 'react-icons/fi';


class Content extends Component {
    render() {
        return (
            <div className='Content'>
                <div className='Content-Search'>
                    <div className="input-icons">
                        <i><FiSearch /></i>
                        <input className="input-field" type="text" placeholder= 'Search for stats'></input>

                    </div>
            </div>


                <h1>Hello David</h1>
                <span className='Content-Greet'>Welcome Back!</span>
            </div>

        );
    }
}


export default Content;