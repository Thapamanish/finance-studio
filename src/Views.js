import React, { Component } from 'react';
import './Views.css';
import {AiOutlineEye,AiOutlineCompass} from 'react-icons/ai';
import {MdOutlineCottage} from 'react-icons/md';

class Views extends Component {
    render() {
        return (
            <div className = 'Views'>
                <div className = 'Views-Component'>
                    <span className = 'Views-Icon'><AiOutlineEye /></span> <br /><br/>
                    views <br />
                    <span className = 'Views-money'>500</span>  <br />
                    Per Day
                </div>
                <div className = 'Views-Component'>
                <span className = 'Views-Icon'><AiOutlineCompass /></span> <br />  <br />
                    Visits <br />
                    <span className = 'Views-money'>2000</span>   <br />
                    Per Minutes
                </div>
                <div className = 'Views-Component'>
                <span className = 'Views-Icon'><MdOutlineCottage /></span> <br />  <br />
                    Orders <br />
                    <span className = 'Views-money'>200</span>   <br />
                    Per Day
                </div>
            </div>

        );
    }
}


export default Views;