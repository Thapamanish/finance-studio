import React, { Component } from 'react';
import './LastComponent.css';
import { AiOutlinePercentage, AiOutlinePieChart } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { MdProductionQuantityLimits } from 'react-icons/md';

import BarChart from './BarChart';

class LastComponent extends Component {

    render() {

        return (
            <div className='LastComponent'>
                Sales Revenue
                <ul>
                    <li><span className='LastComponent-Icon'><AiOutlinePercentage /></span>230k<br /><span className='LastComponent-Text'>Sales</span></li>
                    <li><span className='LastComponent-Icon'><BsPersonCircle /></span>8.549k<br /><span className='LastComponent-Text'>Customers</span></li>
                    <li><span className='LastComponent-Icon'><MdProductionQuantityLimits /></span>1.423k<br /><span className='LastComponent-Text'>Products</span></li>
                    <li><span className='LastComponent-Icon'><AiOutlinePieChart /></span>$9745<br /><span className='LastComponent-Text'>Revenue</span></li>
                </ul>

                Statistics
                <div>
                    <BarChart />

                </div>
            </div>

        );
    }
}


export default LastComponent;