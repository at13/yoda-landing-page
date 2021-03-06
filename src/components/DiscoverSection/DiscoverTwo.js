import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneDiscoverSection";

class DiscoverSection extends Component {
    state = {
        data: {"heading": "Get great contents using our personalization engine",
        "headingTwo": "Get content using our personalization engine.",
        "headingThree": "More productivity with less effort",
        "headingText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolor ut iusto vitae autem neque eum ipsam, impedit asperiores vel cumque laborum dicta repellendus inventore voluptatibus et explicabo nobis unde.",
        "thumbOne": "/img/discover_thumb.png",
        "thumbTwo": "/img/discover_thumb_3.png",
        },
        discoverData: [
            {
                "id": 1,
                "iconClass": "fas fa-check",
                "text": "Personalized course material."
            },
            {
                "id": 2,
                "iconClass": "fas fa-check",
                "text": "Personalized quizzes and exams."
            }
        ],
        discoverIcon: [ 
        //     {
        //     "id": 1,
        //     "iconClass": "fas fa-bell"
        // },
        // {
        //     "id": 2,
        //     "iconClass": "fas fa-envelope-open"
        // },
        // {
        //     "id": 3,
        //     "iconClass": "fas fa-video"
        // }
    ]
    }

    render() {
        return (
            <section className="section discover-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Discover Thumb */}
                        <div className="service-thumb discover-thumb mx-auto text-center mt-5 mt-lg-0">
                            <img src={this.state.data.thumbTwo} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        {/* Discover Text */}
                        <div className="discover-text px-0 px-lg-4 pt-4 pt-lg-0">
                        <h2 className="pb-4">{this.state.data.headingTwo}</h2>
                        {/* Check List */}
                        <ul className="check-list">
                            {this.state.discoverData.map((item, idx) => {
                                return(
                                    <div key={`dt_${idx}`}>
                                        <li className="py-2">
                                            {/* List Box */}
                                            <div className="list-box media">
                                                <span className="icon align-self-center"><i className={item.iconClass} /></span>
                                                <span className="media-body pl-2">{item.text}</span>
                                            </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        <div className="icon-box d-flex mt-3">
                        {this.state.discoverIcon.map((item, idx) => {
                                return(
                                    <div key={`il_${idx}`} className="service-icon pr-3">
                                        <span><i className={item.iconClass} /></span>
                                    </div>
                                );
                            })}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;