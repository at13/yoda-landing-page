import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOnePricingSection";

class PricingSection extends Component {
    state = {
        data: {"iconClass": "far fa-lightbulb text-primary mr-1",
        "preHeading": "Flexible",
        "preHeadingspan": "Pricing",
        "heading": "Unlock Full Power Of sApp",
        "headingText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
        "headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
        "text": "Not sure what to choose?",
        "textLink": "Contact Us",
        "pricingData": [
            {
                "id": 1,
                "planImage": "/img/price_basic.png",
                "planTitle": "Basic",
                "priceSub": "$",
                "planPrice": "49",
                "planBtn": "Sign Up",
                "li_1": "5GB Linux Web Space",
                "li_2": "5 MySQL Databases",
                "li_3": "24/7 Tech Support",
                "li_4": "Daily Backups"
            },
            {
                "id": 2,
                "planImage": "/img/price_premium.png",
                "planTitle": "Pro",
                "priceSub": "$",
                "planPrice": "149",
                "planBtn": "Sign Up",
                "li_1": "10GB Linux Web Space",
                "li_2": "50 MySQL Databases",
                "li_3": "Unlimited Email",
                "li_4": "Daily Backups"
            }
        ]},
        pricingList: [],
        pricingData: [{
            "id": 1,
            "planTitle": "Basic",
            "priceSub": "Rs",
            "planPrice": "299",
            "planBtn": "Sign Up",
            "li_1": "10 GB storage",
            "li_2": "5 MySQL Databases",
            "li_3": "24/7 Tech Support",
            "li_4": "Daily Backups"
        },
        {
            "id": 2,
            "planTitle": "Pro",
            "priceSub": "Rs",
            "planPrice": "599",
            "planBtn": "Sign Up",
            "li_1": "20GB Storage",
            "li_2": "50 MySQL Databases",
            "li_3": "24/7 Tech Support",
            "li_4": "Daily Backups"
        }]
    }

    render() {
        return (
            <section id="pricing" className="section price-plan-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>{this.state.data.heading}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-lg-8">
                            <div className="row price-plan-wrapper">
                                {this.state.pricingData.map((item, idx) => {
                                    return(
                                        <div key={`p_${idx}`} className="col-12 col-md-6 mt-4">
                                            {/* Single Price Plan */}
                                            <div className="single-price-plan text-center p-5">
                                                {/* Plan Thumb */}
                                                <div className="plan-thumb">
                                                    <img className="avatar-lg" src={item.planImage} alt="" />
                                                </div>
                                                {/* Plan Title */}
                                                <div className="plan-title my-2 my-sm-3">
                                                    <h3 className="text-uppercase">{item.planTitle}</h3>
                                                </div>
                                                {/* Plan Price */}
                                                <div className="plan-price pb-2 pb-sm-3">
                                                    <h1 className="color-primary"><small className="fw-7">{item.priceSub}</small>{item.planPrice}</h1>
                                                </div>
                                                {/* Plan Description */}
                                                <div className="plan-description">
                                                    <ul className="plan-features">
                                                        <li className="border-top py-3">{item.li_1}</li>
                                                        <li className="border-top py-3">{item.li_2}</li>
                                                        <li className="border-top py-3">{item.li_3}</li>
                                                        <li className="border-top border-bottom py-3">{item.li_4}</li>
                                                    </ul>
                                                </div>
                                                {/* Plan Button */}
                                                <div className="plan-button">
                                                    <a href="/#" className="btn mt-4">{item.planBtn}</a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-5">
                        <p className="text-body pt-4 fw-5">{this.state.data.text} <a href="/#">{this.state.data.textLink}</a></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingSection;