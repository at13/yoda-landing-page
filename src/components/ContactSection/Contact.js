import React, { Component } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneContactSection";

class ContactSection extends Component {
    state = {
        data: {
            "heading": "Contact Us!",
        "headingText": "For Demo, Drop us a note or contact on below numbers!",
        "headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
        "content": "Excited about the product. Have any questions or feedback for us. Please contact us below!"
        },
        iconList: [
            {
                "id": 1,
                "iconClass": "fas fa-home",
                "text": "Plot Number 10, Lane Number 1, Vahini Nagar, Secunderabad, Telangana, India - 500 009"
            },
            {
                "id": 2,
                "iconClass": "fas fa-phone-alt",
                "text": "+91-8179125297"
            },
            {
                "id": 3,
                "iconClass": "fas fa-envelope",
                "text": "contact@yoda.guru"
            }
        ]
    }

    render() {
        return (
            <section id="contact" className="contact-area bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">{this.state.data.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-between">
                    <div className="col-12 col-md-5">
                        {/* Contact Us */}
                        <div className="contact-us">
                        <p className="mb-3">{this.state.data.content}</p>
                            <ul>
                                {this.state.iconList.map((item, idx) => {
                                    return(
                                        <li key={`ci_${idx}`} className="py-2">
                                            <a className="media" href="/#">
                                                <div className="social-icon mr-3">
                                                    <i className={item.iconClass} />
                                                </div>
                                                <span className="media-body align-self-center">{item.text}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-4 pt-md-0">
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;