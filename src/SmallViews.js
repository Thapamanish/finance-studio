import React, { Component } from 'react';
import './SmallViews.css';

class SmallViews extends Component {
    render() {
        return (
            <div className='SmallViews'>
                <div className='SmallViews-sideFlex'>
                    <div className='SmallViews-Combo'>




                        <div className="flex-wrapper">
                            <div className ='SmallViews-Combo1'>
                                <span className='SmallViews-Content' >Sales </span><br />
                                <span className = 'SmallViews-Text'>Total Sales Today</span><br />
                                <span className='SmallViews-Price'>$500 </span>
                            </div>
                            <div className="single-chart SmallViews-MidMargin SmallViews-Combo11">
                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                    <path className="circle-bg"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        stroke-dasharray="55, 100"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">55%</text>
                                </svg>
                            </div>

                            <div className = 'SmallViews-Combo2'>
                                <span className='SmallViews-Content' > Profit</span><br />
                                <span className = 'SmallViews-Text'>Total Profit Today</span><br />
                                <span className='SmallViews-Price'>$150 </span>
                            </div>
                            <div className="single-chart SmallViews-Combo22">
                                <svg viewBox="0 0 36 36" className="circular-chart green">
                                    <path className="circle-bg"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        stroke-dasharray="30, 100"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">30%</text>
                                </svg>
                            </div>

                            {/* <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart blue">
                                    <path class="circle-bg"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="90, 100"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">90%</text>
                                </svg>
                            </div> */}
                        </div>


                    </div>


                </div>
                <div className='SmallViews-sideFlex'>
                    <div className='SmallViews-Combo'>




                        <div className="flex-wrapper">
                            <div className ='SmallViews-Combo3'>
                                <span className='SmallViews-Content' >Orders </span><br />
                                <span className = 'SmallViews-Text'>Total Order Today</span><br />
                                <span className='SmallViews-Price'> 1000</span>
                            </div>
                            <div className="single-chart SmallViews-MidMargin SmallViews-Combo33">
                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                    <path className="circle-bg"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        stroke-dasharray="80, 100"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">80%</text>
                                </svg>
                            </div>

                            <div className ='SmallViews-Combo4'>
                                <span className='SmallViews-Content' >Visits </span><br />
                                <span className = 'SmallViews-Text'>Total Visits Today</span><br />
                                <span className='SmallViews-Price'>400 </span>
                            </div>
                            <div className="single-chart SmallViews-Combo44">
                                <svg viewBox="0 0 36 36" className="circular-chart green">
                                    <path className="circle-bg"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        stroke-dasharray="70, 100"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">70%</text>
                                </svg>
                            </div>

                            {/* <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart blue">
                                    <path class="circle-bg"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="90, 100"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">90%</text>
                                </svg>
                            </div> */}
                        </div>


                    </div>


                </div>



            </div>



        );
    }
}


export default SmallViews;