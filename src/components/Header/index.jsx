import React from 'react';
import {NavLink} from 'react-router-dom'
const index = () => {
    return (
        <div>
            <header className="header bg-info py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-content d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <NavLink to="/">
                                        <h1 className="site-logo text-uppercase text-light">Logo</h1>
                                    </NavLink>
                                </div>
                                <div className="menu">
                                    <ul className='d-flex gap-5 list-unstyled justify-content-between align-items-center mt-3'>
                                        <li><NavLink className='text-light' to='/'>Home</NavLink></li>
                                        <li><NavLink className='text-light' to="/users">Users</NavLink></li>
                                        <li><NavLink className='text-light' to="/about">About</NavLink></li>
                                        <li><NavLink className='text-light' to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default index;