import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
                <div className="container position-relative">
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky" src={this.props.imageData} alt="sticky brand-logo" />
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#features">Features</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link scroll" href="#screenshots">Screenshots</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://app.yoda.guru/#/login" target="_blank">Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
        );
    }
}

export default Header;