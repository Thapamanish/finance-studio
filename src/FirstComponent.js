import React, { Component } from 'react';
import './FirstComponent.css';
import {FaHome} from 'react-icons/fa';
import {AiOutlineBank, AiOutlineTeam, AiOutlineTrophy} from 'react-icons/ai';
import {ImStatsBars2} from 'react-icons/im';
import {FiSettings} from 'react-icons/fi';

class FirstComponent extends Component {
    render() {
        return (
            <div className = 'FirstComponent'>
                <ul>
                    <li><FaHome /> Home</li>
                    <li><AiOutlineTrophy />&nbsp;Projects</li>
                    <li><AiOutlineBank />&nbsp;Billings</li>
                    <li><AiOutlineTeam/>&nbsp;TeamMembers</li>
                    <li><ImStatsBars2/>&nbsp;Stats</li>
                    <li><FiSettings />&nbsp;Settings</li>
                </ul>
            </div>

        );
    }
}


export default FirstComponent;