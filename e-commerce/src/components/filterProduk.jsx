import React from 'react';
import logo from '../images/logo.svg'
import search from '../images/search.png'
import profile from '../images/profile.svg'
import { Link, withRouter } from 'react-router-dom';

class Filter extends React.Component{

    render(){

        return(
            <React.Fragment>
                <div className="container border bg-white mt-5 pb-5 rounded">
                    <div className="col-lg-12 mt-5 mb-3 text-center">
                        <h5>Filter</h5>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                    <div className="nav-item dropdown mb-2  text-center">
                        <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Kategori&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Inbox</a>
                            <a href="#" className="dropdown-item">Sent</a>
                            <a href="#" className="dropdown-item">Drafts</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="nav-item dropdown mb-2  text-center">
                        <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Harga&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Inbox</a>
                            <a href="#" className="dropdown-item">Sent</a>
                            <a href="#" className="dropdown-item">Drafts</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="nav-item dropdown mb-2  text-center">
                        <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Lokasi&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Inbox</a>
                            <a href="#" className="dropdown-item">Sent</a>
                            <a href="#" className="dropdown-item">Drafts</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="nav-item dropdown mb-2 text-center">
                        <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Rating&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Inbox</a>
                            <a href="#" className="dropdown-item">Sent</a>
                            <a href="#" className="dropdown-item">Drafts</a>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}


export default withRouter(Filter)
