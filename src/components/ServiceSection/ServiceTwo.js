import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneServiceSection";

class ServiceSection extends Component {
    state = {
        data: {
            "heading": "Make your Device Manage Everything For you",
        "headingTwo": "Advanced Analytics.",
        "headingThree": "Smart and secure mobile banking",
        "headingFour": "More productivity with less effort",
        "headingFive": "Organize all your media content easily",
        "headingSix": "Work faster with powerful filters",
        "headingSeven": "Stay connected with all of your friends",
        "buttonText": "Learn More",
        "thumbOne": "/img/features_thumb.png",
        "thumbTwo": "/img/service_thumb_2.png",
        "thumbThree": "/img/welcome_mockup_2.png",
        "thumbFour": "/img/discover_thumb.png",
        "thumbFive": "/img/service_thumb_1.png",
        "thumbSix": "/img/discover_thumb_2.png",
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Interactive Charts."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Performance Metrics."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Insightful Feedback."
            },

        ]
    }
    
    render() {
        return (
            <section className="section service-area bg-inherit overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Service Text */}
                        <div className="service-text pt-4 pt-lg-0">
                        <h2 className="mb-4">{this.state.data.headingTwo}</h2>
                        {/* Service List */}
                        <ul className="service-list">
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <div key={`st_${idx}`}>
                                        {/* Single Service */}
                                        <li className="single-service media py-2">
                                        <div className="service-icon pr-4">
                                            <span><i className={item.iconClass} /></span>
                                        </div>
                                        <div className="service-text media-body">
                                            <p>{item.text}</p>
                                        </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        {/* <a href="/#" className="btn btn-bordered mt-4">{this.state.data.buttonText}</a> */}
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-md-block">
                        {/* Service Thumb */}
                        <div className="service-thumb mx-auto">
                            <img src={this.state.data.thumbTwo} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;