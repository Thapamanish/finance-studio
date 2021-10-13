import React, { Component } from 'react';
import Content from './Content';
import Views from './Views';
import SmallViews from './SmallViews';
import './MidComponent.css';

class MidComponent extends Component {
    // static defaultProps = {
    //     criteria: ['Sales', 'Orders', 'Profit', 'Visits'],
    //     caption: ['Total Sales Today', 'Total Orders Today', 'Per Day Ratio', 'Total Visits Today'],
    //     nums: ['$500', '1000', '$150', '400']
    // }
    render() {
        // console.log(this.props.criteria.length);
        // const smallComponents = Array.from({ length: this.props.criteria }).map(
        //     () => (<SmallViews
        //         newCriteria={this.props.criteria}
        //         newCaption={this.props.caption}
        //         newNums={this.props.nums}
        //     />));

        // console.log(smallComponents);
        return (
            <div className = 'MidComponent'>
                <div>
                    <Content />
                </div>
                <div>
                    <Views />
                </div>

                <div>
                    <SmallViews />
                </div>



            </div>

        );
    }
}


export default MidComponent;